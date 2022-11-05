import { useState } from 'react'
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import data from './data'


function App() {
  const { products } = data;
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products')

  const addToCart = (product) => {
    setCart([...cart, {...product}])
  }

  const removeFromCart = (productToRemove) => {
    const newProductList = cart.filter((product) => product !== productToRemove);
    setCart(newProductList);
  }

  const clearCart = () => {
    setCart([])
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  return (
    <div className="container">
      <header className="d-flex justify-content-center m-4 bg-warning p-5">
        <button className="gotocart" onClick={()=>navigateTo('cart')}>Go to Cart ({cart.length})</button>
        <button className="view" onClick={()=>navigateTo('products')}>View Products</button>
      </header>

      {page === 'products' && <ProductList products={products} addToCart={addToCart} />}      
      {page === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
    </div>
  )
}

export default App
