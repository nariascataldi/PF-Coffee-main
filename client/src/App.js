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
import Modals from './components/Admin/Modals/Modals';

import AuthLayout from './components/Authentication/AuthLayout';
import Login from "./components/Authentication/Login";
import Register from './components/Authentication/Register';
import ForgetPassword from "./components/Authentication/ForgetPassword";
import NewPassword from "./components/Authentication/NewPassword";
import ConfirmAccount from './components/Authentication/ConfirmAccount';

import './styles/normalize.css'
import './styles/globals.css'
import ListProvider from './components/Admin/FormProvider/ListProvider';
import ModifyProvider from './components/Admin/FormProvider/ModifyProvider'
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from './components/NotFound';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />       
        <Route path="/home" element={<Home />} />       
        <Route path="/form" element={<Perfil />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* -------------- Auth ---------------------*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password/:token" element={<NewPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/confirm/:id" element={<ConfirmAccount />} />        
        {/* -------------- Auth ---------------------*/}
        <Route exact path="/fillCart" element={<FillCart />} />
      { /* <Route exact path="/productAdminEdit" element={<ProductAdminEdit />} />*/}
        <Route exact path="/productAdmin" element={<ProductAdmin />} />
        <Route exact path="/homeAdmin" element={<HomeAdmin />} />
        <Route exact path='/modProvider/:id' element={<ModifyProvider />}/>
        <Route exact path='/list' element={<ListProvider />} />
        <Route exact path='/crud/product' element={<CrudApp />} />
        <Route exact path="/providerCreate" element={<ProviderCreate />} />
        <Route exact path="/providers" element={<Providers />} />
        <Route exact path="/formusers" element={<FormularioUsuario />} />
        <Route exact path='/modals' element={<Modals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;


//AEREA PUBLICA DE AUTENTICACIÓN 48 - 53
