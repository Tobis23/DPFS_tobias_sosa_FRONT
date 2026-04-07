import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import { App } from './componentes/App';
import { Actividades } from './componentes/Actividades';
import { Header } from './componentes/Header';
import { FooterView as Footer } from './views/FooterView';
import { Unete_ya } from './componentes/Unete_ya';
import { Login } from './componentes/Login';
import { Horariosventana } from './componentes/Horariosventana';

import './index.scss'

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
{
  path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/Actividades", element: <Actividades /> },
      { path: "/Unete_ya", element: <Unete_ya /> },
      { path: "/Horariosventana", element: <Horariosventana /> },
      { path: "/Login", element: <Login /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)