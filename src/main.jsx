import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop.jsx';
import Home from './Component/Layout/Home.jsx';
import Orders from './Component/Orders/Orders.jsx';
import Inventory from './Component/Inventory/Inventory.jsx';
import Login from './Component/Login/Login.jsx';
import cartProductsLoader from './Loaders/cartProductsLoader.js';
import Checkout from './Component/Checkout/Checkout.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
     
     
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>,
        loader: cartProductsLoader
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
