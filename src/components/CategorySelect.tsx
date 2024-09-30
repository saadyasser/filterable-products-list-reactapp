import { FC } from "react";

interface CategorySelectProps {
  category: string;
  setCategory: (category: string) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({ category, setCategory }) => {
  return (
    <div className="mb-2">
      <label htmlFor="category">Search By Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Pie">Pie</option>
        <option value="Waffle">Waffle</option>
        <option value="Cake">Cake</option>
        <option value="Tiramisu">Tiramisu</option>
        <option value="Macaron">Macaron</option>
        <option value="Baklava">Baklava</option>
        <option value="Panna Cotta">Panna Cotta</option>
      </select>
    </div>
  );
};

export default CategorySelect;
