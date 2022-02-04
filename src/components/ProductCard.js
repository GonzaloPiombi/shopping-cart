import { useState } from 'react';

const ProductCard = (props) => {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount === 1) {
      return;
    }
    return setAmount(amount - 1);
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img
          className="grid-image"
          src={props.product.image}
          alt={props.product.title}
        />
      </div>
      <div className="details-container">
        <h2>{props.product.title}</h2>
        <p>${props.product.price}</p>
        <div className="counter">
          <button onClick={handleDecrement}>-</button>
          <p>{amount}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button
          className="add-to-cart"
          onClick={() => props.addToCart(amount, props.product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
