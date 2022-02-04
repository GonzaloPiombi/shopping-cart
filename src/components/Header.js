import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <i class="las la-gamepad"></i>
        <h1>
          <Link to="/">GameOver</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
