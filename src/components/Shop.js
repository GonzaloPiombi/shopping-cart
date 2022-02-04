import ProductCard from './ProductCard';

const Shop = (props) => {
  return (
    <section>
      <div className="grid-shop">
        {props.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Shop;
