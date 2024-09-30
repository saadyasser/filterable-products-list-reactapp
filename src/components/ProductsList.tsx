import { FC } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
