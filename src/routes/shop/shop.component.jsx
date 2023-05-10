import PRODUCTS from "../../shop-data.json";
import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <div className="products-container">
      {PRODUCTS.map((product) => {
        return <ProductCard key={product.id} product={product} o />;
      })}
    </div>
  );
};

export default Shop;
