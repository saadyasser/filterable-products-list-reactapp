import { FC } from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <article>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <span>{product.category}</span>
      <p className="product-price">${product.price}</p>
    </article>
  );
};

export default ProductCard;
