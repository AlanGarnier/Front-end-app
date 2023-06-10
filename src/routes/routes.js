// Import de react et des composants des route
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// Imort des views
import SignInUser from '../views/auth/user/LoginUser';
import SignUpUser from "../views/auth/user/RegisterUser";
import MenuCard from "../views/menu/Menu";
import OrderF from '../views/order/Order';
import UserDashboard from '../views/dashboard/user/home';
import AddMenu from "../views/dashboard/user/menuForm";

// Liste des route
// eslint-disable-next-line require-jsdoc
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/connexion" />} />
          <Route path="/connexion" element={<SignInUser />} />
          <Route path="/register" element={<SignUpUser />} />
          <Route path="/menu" element={<MenuCard />} />
          <Route path="/order" element={<OrderF />} />
          <Route path="/dashboard" element={<UserDashboard/>}/>
          <Route path="/dashboard/menu" element={<AddMenu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
