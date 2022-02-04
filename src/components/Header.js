import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <i className="logo-icon las la-gamepad"></i>
        <h1>
          <Link to="/">GameOver</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/shop" onClick={props.openCart}>
            <i className="las la-shopping-cart"></i>
            <p className="cart-amount">{props.cartAmount}</p>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
