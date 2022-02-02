import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
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
