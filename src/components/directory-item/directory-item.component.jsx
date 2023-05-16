import "./directory-item.style.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <div className="directory-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="directory-body-container">
        <Link to={`/shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
