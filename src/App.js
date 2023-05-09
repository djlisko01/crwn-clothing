import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
// import Authen from "./routes/sign-in/sign-in.component";

import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
