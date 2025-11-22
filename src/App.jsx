import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";   // ✅ Added Navigate
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Cart from "./Pages/Cart.jsx";
import Product from "./Pages/Product.jsx";
import Foot from "./Components/Footer/Foot.jsx";
import mens_banner from "./Components/Assets/banner_mens.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import womens_banner from "./Components/Assets/banner_women.png";
import ShopContextProvider from "./Components/Context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">

          <Navbar />

          <div className="grow">
            <Routes>

              {/* ✅ Fix: Redirect / to /shop */}
              <Route path="/" element={<Navigate to="/shop" />} />

              <Route path="/shop" element={<Shop />} />
              <Route path="/men" element={<ShopCategory banner={mens_banner} category="men" />} />
              <Route path="/women" element={<ShopCategory banner={womens_banner} category="women" />} />
              <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignup />} />

            </Routes>
          </div>

          <div className="shrink-0">
            <Foot />
          </div>

        </div>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
