import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Account from "./pages/Account";

function App() {
  const token = window.localStorage.getItem("token")
  console.log(token);
  return (
    <>
      <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/art/:id" element={<Main />}></Route>
          <Route path="/account" element={token == null ? <Login /> : <Account />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
