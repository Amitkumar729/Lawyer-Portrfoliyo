import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/header";
import Home from "../page/home";
import { About } from "../page/about";
import { PracticeArea } from "../page/practiceArea";
import Footer from "../component/Footer";
import { Contact } from "../page/contact";
import Gallary from "../views/gallary";
import Blog from "../page/blog";
import { PageDetails } from "../views/pageDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<About />} />
        <Route path="/practice-area" element={<PracticeArea />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<PageDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
