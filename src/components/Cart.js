const Cart = (props) => {
  if (props.isCartOpen) {
    return (
      <div>
        <div className="cart">
          {props.items.map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-image">
                  <img
                    className="grid-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div>
                  <h1>{item.title.slice(0, 15)}...</h1>
                  <p>${item.price * item.quantity}</p>
                  <p>{item.quantity}</p>
                </div>
              </div>
            );
          })}
          <div className="cart-buttons">
            <h1>
              Total:
              {props.items.reduce((acc, curr) => {
                return (acc += curr.price * curr.quantity);
              }, 0)}
            </h1>
            <button>Check Out</button>
            <button onClick={props.closeCart}>Close Cart</button>
          </div>
        </div>
        <div className="modal" onClick={props.closeCart}></div>
      </div>
    );
  }
  return null;
};

export default Cart;
