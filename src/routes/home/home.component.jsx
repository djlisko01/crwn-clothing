import Directory from "../../components/directory/directory.component";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://cdn.fs.teachablecdn.com/jXxMUj86Qf2pChV37EzI")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="App">
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
