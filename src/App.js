import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./Redux/components/HeaderComponent";
import FooterComponent from "./Redux/components/FooterComponent";
import Home from "./Redux/components/Home";
import Cart from "./Redux/components/Cart";
import Shop from "./Redux/components/Shop";
import Compare from "./Redux/components/Compare";
import Category from "./Redux/components/Category";
import RegistrationForm from "./Redux/components/RegistrationForm";
import LoginForm from "./Redux/components/LoginForm";
import ProtectedRoute from "./Redux/components/ProtectedRoutes";
import Wishlist from "./Redux/components/Wishlist";
import SearchComponent from "./Redux/components/SearchComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<ProtectedRoute Component={Shop} />} />
        <Route
          path="/category"
          element={<ProtectedRoute Component={Category} />}
        />
        <Route
          path="/compare"
          element={<ProtectedRoute Component={Compare} />}
        />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/searchcomponent" element={<SearchComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
