import ProductCard from './ProductCard';

const Shop = (props) => {
  if (!props.isLoading) {
    return (
      <section>
        <div className="grid-shop">
          {props.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={props.addToCart}
              />
            );
          })}
        </div>
      </section>
    );
  }
  return <div className="loader">Loading...</div>;
};

export default Shop;
