import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchInput from "./components/SearchInput";
import CategorySelect from "./components/CategorySelect";
import ProductsList from "./components/ProductsList";
import { Product } from "./types";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    image: "./assets/images/image-waffle-mobile.jpg",
  },
  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    image: "./assets/images/image-creme-brulee-mobile.jpg",
  },
  {
    id: 3,
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    image: "./assets/images/image-macaron-mobile.jpg",
  },
  {
    id: 4,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    image: "./assets/images/image-tiramisu-mobile.jpg",
  },
  {
    id: 5,
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    image: "./assets/images/image-baklava-mobile.jpg",
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    image: "./assets/images/image-meringue-mobile.jpg",
  },
  {
    id: 7,
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    image: "./assets/images/image-cake-mobile.jpg",
  },
  {
    id: 8,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    image: "./assets/images/image-brownie-mobile.jpg",
  },
  {
    id: 9,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    image: "./assets/images/image-panna-cotta-mobile.jpg",
  },
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, category]);

  const filterProducts = () => {
    let filtered = PRODUCTS.filter(
      (product) =>
        (category === "All" || product.category === category) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      <main className="layout">
        <aside>
          <SearchInput setSearchTerm={setSearchTerm} />
          <CategorySelect category={category} setCategory={setCategory} />
        </aside>
        <section>
          <h1>Main Products</h1>
          <ProductsList products={filteredProducts} />
        </section>
      </main>
    </div>
  );
};

export default App;
