import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/header";
import Home from "../page/home";
import { About } from "../page/about";
import { PracticeArea } from "../page/practiceArea";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<About />} />
        <Route path="/practice-area" element={<PracticeArea />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
