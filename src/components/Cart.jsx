export const Cart = ({ cart, removeFromCart, clearCart }) => {
  
  const getTotalPrice = () => {
    return cart.reduce((sum,{price})=>sum + price,0)
  }
  
  return (
    <div>
      <h1 className="text-center my-4">Shopping Cart</h1>
      <div className="products">
      {cart.map((product) => (
        <div key={product.id} className="d-flex justify-content-between mb-3">
          <img src={product.image} alt={product.name} className="img-thumbnail" />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</button>
          <button className="btn btn-info" onClick={()=>clearCart(product)}>Clear Cart</button>
      </div>
    ))}
      </div>
      <div className="text-success mt-4">Total Bill: ${getTotalPrice().toFixed(2)}</div>
    </div>
  )
};