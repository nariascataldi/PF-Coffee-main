import React from 'react';
import { Route, Routes } from "react-router-dom";
import { LOGIN, PRIVATE, LOGOUT } from './config/router/paths';

// import LandingPage from './components/LandingPage';
import About from './components/About';
import Detail from './components/Detail';
import Perfil from './components/Account/Perfil';
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
import ProductAdmin from './components/Admin/Product/ProductAdmin';
// import CrudApp from './components/Admin/CRUD/CrudAppProduct';
// import ProviderCreate from './components/Admin/FormProvider/PrividerCreate';
import Providers from "./components/Provider/Providers";
import FillCart from "./components/FillCart/FillCart";
import FormularioUsuario from "./components/Account/UserCreate/UserCreate";
import Modals from './components/Admin/Modals/Modals';

import AuthLayout from './components/Authentication/AuthLayout';
// import Login from "./components/Authentication/Pages/Login";
import Register from './components/Authentication/Pages/Register';
import ForgetPassword from "./components/Authentication/Pages/ForgetPassword";
import NewPassword from "./components/Authentication/Pages/NewPassword";
import ConfirmAccount from './components/Authentication/Pages/ConfirmAccount';

import ListProvider from './components/Provider/CRUD Provider/ListProvider';
import FormModifyProvider from './components/Provider/CRUD Provider/ModifyProvider';
import FormModifyProduct from './components/Admin/Product/CRUD Product/ModifyProduct';
import NotFound from './components/NotFound';
import ListProducts from './components/Admin/Product/CRUD Product/ListProduct';
import Loading from './components/Loading';

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/normalize.css'
import './styles/globals.css'
//----------Autenticacion-------------
import Home from './components/Home';
import Login from './components/views/Login';
import Logout from './components/views/Logout';
import Private from './components/views/Private';
import PublicRoute from './components/router/PublicRoute';
import PrivateRoute from './components/router/PrivateRoute';




function App() {
  return (
    <div>
      <Routes>
        {/* Rutas públicas */}
        <Route path='/' element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/form" element={<Perfil />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="confirm/:id" element={<ConfirmAccount />} />
          <Route path="forget-password/:token" element={<NewPassword />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path='/loading' element={<Loading />} />
          <Route exact path='/modals' element={<Modals />} /> */}

        </Route>
        {/* Rutas privadas */}
        <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route index element={<Private />} />
          <Route path={LOGOUT} element={<Logout />} />
          {/* <Route exact path="/fillCart" element={<FillCart />} />
          <Route exact path="/productAdmin" element={<ProductAdmin />} />
          <Route exact path="/homeAdmin" element={<HomeAdmin />} />
          <Route exact path='/modProvider/:id' element={<FormModifyProvider />} />
          <Route exact path='/modProduct/:id' element={<FormModifyProduct />} />
          <Route exact path='/listproductedit' element={<ListProducts />} />
          <Route exact path='/list' element={<ListProvider />} />
          <Route exact path="/providers" element={<Providers />} />
          <Route exact path="/formusers" element={<FormularioUsuario />} /> */}

        </Route>

        <Route path="*" element={<NotFound />} />

        {/* <Route exact path='/' element={<LandingPage />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route index element={<Login />} /> */}
        { /* <Route exact path="/productAdminEdit" element={<ProductAdminEdit />} />*/}

        {/* <Route exact path='/crud/product' element={<CrudApp />} /> */}
        {/* <Route exact path="/providerCreate" element={<ProviderCreate />} /> */}
      </Routes>
    </div>
  );
}

export default App;


//AEREA PUBLICA DE AUTENTICACIÓN 48 - 53
