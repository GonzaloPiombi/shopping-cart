import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
  const [products, setProducts] = useState([]);

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
    console.log(items);
    return setProducts(items);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
