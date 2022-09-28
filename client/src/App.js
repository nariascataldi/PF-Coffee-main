import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from './contexts/authContext';
import { LOGIN, PRIVATE, LOGOUT, ADMIN_HOME, ABOUT, DETAIL, FILLCART } from './config/router/paths';

import NotFound from './components/NotFound';
import Home from './components/Home';
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
import About from './components/About';
import Detail from './components/Detail';
import FillCart from "./components/FillCart/FillCart";

import Login from './components/views/Login';
import Logout from './components/views/Logout';
import Private from './components/views/Private';
import PublicRoute from './components/router/PublicRoute';
import PrivateRoute from './components/router/PrivateRoute';

// import LandingPage from './components/LandingPage';
// import Perfil from './components/Account/Perfil';
// import ProductAdmin from './components/Admin/Product/ProductAdmin';
// import CrudApp from './components/Admin/CRUD/CrudAppProduct';
// import ProviderCreate from './components/Admin/FormProvider/PrividerCreate';
// import Providers from "./components/Provider/Providers";
// import FormularioUsuario from "./components/Account/UserCreate/UserCreate";
// import Modals from './components/Admin/Modals/Modals';

// import AuthLayout from './components/Authentication/AuthLayout';
// import Login from "./components/Authentication/Pages/Login";
// import Register from './components/Authentication/Pages/Register';
// import ForgetPassword from "./components/Authentication/Pages/ForgetPassword";
// import NewPassword from "./components/Authentication/Pages/NewPassword";
// import ConfirmAccount from './components/Authentication/Pages/ConfirmAccount';

// import ListProvider from './components/Provider/CRUD Provider/ListProvider';
// import FormModifyProvider from './components/Provider/CRUD Provider/ModifyProvider';
// import FormModifyProduct from './components/Admin/Product/CRUD Product/ModifyProduct';
// import ListProducts from './components/Admin/Product/CRUD Product/ListProduct';


import "bootstrap/dist/css/bootstrap.min.css";
import './styles/normalize.css'
import './styles/globals.css'





function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas */}
          <Route path='/' element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={DETAIL} element={<Detail />} />
            <Route path={FILLCART} element={<FillCart />} />
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/form" element={<Perfil />} /> */}
            {/* <Route path="confirm/:id" element={<ConfirmAccount />} /> */}
            {/* <Route path="forget-password/:token" element={<NewPassword />} /> */}
            {/* <Route path="forget-password" element={<ForgetPassword />} /> */}
            {/* <Route exact path='/modals' element={<Modals />} /> */}

            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Rutas privadas */}
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Private />} />
            <Route path={LOGOUT} element={<Logout />} />
            <Route path={ADMIN_HOME} element={<HomeAdmin />} />
            {/* <Route path={ADMIN_PRODUCT} element={<ProductAdmin />} /> */}

            {/* <Route path='/modProvider/:id' element={<FormModifyProvider />} />
          <Route path='/modProduct/:id' element={<FormModifyProduct />} />
          <Route path='/listproductedit' element={<ListProducts />} />
          <Route path='/list' element={<ListProvider />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/formusers" element={<FormularioUsuario />} /> */}

          </Route>


          {/* <Route exact path='/' element={<LandingPage />} /> */}


          { /* <Route exact path="/productAdminEdit" element={<ProductAdminEdit />} />*/}

          {/* <Route exact path='/crud/product' element={<CrudApp />} /> */}
          {/* <Route exact path="/providerCreate" element={<ProviderCreate />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;


//AEREA PUBLICA DE AUTENTICACIÓN 48 - 53
