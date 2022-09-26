import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
import About from './components/About';
import Home from './components/Home';
import Detail from './components/Detail';
import Perfil from './components/Account/Perfil';
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
import ProductAdmin from './components/Admin/Product/ProductAdmin';
import CrudApp from './components/Admin/CRUD/CrudAppProduct';
import ProviderCreate from './components/Admin/FormProvider/PrividerCreate';
import Providers from "./components/Provider/Providers";
import FillCart from "./components/FillCart/FillCart";
import FormularioUsuario from "./components/Account/UserCreate/UserCreate";

import AuthLayout from './components/Authentication/AuthLayout';
import Login from "./components/Authentication/Pages/Login";
import Register from './components/Authentication/Pages/Register';
import ForgetPassword from "./components/Authentication/Pages/ForgetPassword";
import NewPassword from "./components/Authentication/Pages/NewPassword";
import ConfirmAccount from './components/Authentication/Pages/ConfirmAccount';

import './styles/normalize.css'
import './styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from './components/NotFound';



function App() {
  return (
    <div>
      <Routes>
        {/*<Route exact path="/landing" element={<LandingPage />} />*/}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Perfil />} />
        <Route exact path="/homeAdmin" element={<HomeAdmin />} />
        <Route exact path="/productAdmin" element={<ProductAdmin />} />
      { /* <Route exact path="/productAdminEdit" element={<ProductAdminEdit />} />*/}
        <Route exact path="/providerCreate" element={<ProviderCreate />} />
        <Route exact path="/providers" element={<Providers />} />

        <Route exact path="/formusers" element={<FormularioUsuario />} />

        <Route exact path="/fillCart" element={<FillCart />} />

        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="forget-password/:token" element={<NewPassword />} />
          <Route path="confirm/:id" element={<ConfirmAccount />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;


//AEREA PUBLICA DE AUTENTICACIÓN 48 - 53
