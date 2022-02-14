import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancel = false;
    if (!cancel) {
      return fetchProducts();
    }
    return () => {
      cancel = true;
    };
  }, []);

  const fetchProducts = async () => {
    const data = await fetch(
      'https://fakestoreapi.com/products/category/electronics'
    );
    const items = await data.json();
    setProducts(items);
    return setIsLoading(false);
  };

  const addToCart = (amount, product) => {
    setCartAmount(cartAmount + amount);
    const cartItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (cartItemIndex !== -1) {
      const newArr = [...cartItems];
      newArr[cartItemIndex].quantity += amount;
      return setCartItems(newArr);
    }
    setCartItems(cartItems.concat({ ...product, quantity: amount }));
  };

  const deleteFromCart = (product) => {
    const amount = product.quantity;
    setCartAmount(cartAmount - amount);

    const newArr = [...cartItems].filter((item) => item.id !== product.id);
    setCartItems(newArr);
  };

  const changeCartStatus = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartAmount={cartAmount} openCart={changeCartStatus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                products={products}
                addToCart={addToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Cart
          items={cartItems}
          isCartOpen={isCartOpen}
          closeCart={changeCartStatus}
          deleteItem={deleteFromCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
