import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div>
        <h1>Get the latest equipment for your gaming system</h1>
        <Link to="/shop">
          <button>Shop now</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
