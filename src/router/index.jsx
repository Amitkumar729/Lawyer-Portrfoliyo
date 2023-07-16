import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/header";
import Home from "../page/home";
import { About } from "../page/about";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
