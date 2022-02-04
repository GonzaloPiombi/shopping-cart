const Cart = (props) => {
  if (props.isCartOpen) {
    return (
      <div className="cart">
        {props.items.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="cart-image">
                <img className="grid-image" src={item.image} alt={item.title} />
              </div>
              <div>
                <h1>{item.title.slice(0, 15)}...</h1>
                <p>${item.price * item.quantity}</p>
                <p>{item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default Cart;
