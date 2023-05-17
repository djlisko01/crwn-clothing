import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => {
        return (
          <DirectoryItem
            key={id}
            title={title.toLocaleUpperCase()}
            imageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Directory;
