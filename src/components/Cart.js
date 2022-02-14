const Cart = (props) => {
  const closeAnimation = (cart, modal) => {
    cart.animate([{ right: '0' }, { right: '-50%' }], {
      duration: 500,
      iterations: 1,
      easing: 'ease-in',
    });
    modal.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 500,
      iterations: 1,
      easing: 'ease-in-out',
    });
  };

  const handleClose = () => {
    closeAnimation(
      document.querySelector('.cart'),
      document.querySelector('.modal')
    );
    setTimeout(() => {
      props.closeCart();
    }, 500);
  };

  if (props.isCartOpen) {
    return (
      <div>
        <div className="cart">
          <h1>My Cart</h1>
          <div className="container">
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
                    <h2>{item.title.slice(0, 15)}...</h2>
                    <p>${item.price * item.quantity}</p>
                    <p>{item.quantity}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-buttons">
            <h1>
              Total: $
              {props.items.reduce((acc, curr) => {
                return (acc += curr.price * curr.quantity);
              }, 0)}
            </h1>
            <button>Check Out</button>
            <button onClick={handleClose}>Close Cart</button>
          </div>
        </div>
        <div className="modal" onClick={handleClose}></div>
      </div>
    );
  }
  return null;
};

export default Cart;
