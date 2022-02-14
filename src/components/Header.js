import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <Link to="/shopping-cart">
        <div className="logo">
          <i className="logo-icon las la-gamepad"></i>
          <h1>GameOver</h1>
        </div>
      </Link>
      <nav>
        <ul>
          <NavLink to="/shopping-cart">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="cart-icon" onClick={props.openCart}>
            <i className="las la-shopping-cart"></i>
            <p className="cart-amount">{props.cartAmount}</p>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
