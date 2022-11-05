export const ProductList = ({ products, addToCart }) => {
  
  return (
    <div>
      <h1 className="text-center my-4">My Electronic Store</h1>
      <div className="products">
      {products.map((product) => (
        <div className="d-flex justify-content-between mb-3">
          <img src={product.image} alt={product.name} className="img-thumbnail" />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      </div>
  </div>
  )
};