import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => {
        return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default Directory;
