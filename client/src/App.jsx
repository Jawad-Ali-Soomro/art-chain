import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/art/:id" element={<Main />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
