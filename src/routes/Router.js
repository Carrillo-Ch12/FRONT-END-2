import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */

const Biblioteca = Loadable(lazy(() => import("../pages/Paginas/Biblioteca")));
const Login = Loadable(lazy(() => import("../pages/Paginas/Login")));
const Registro = Loadable(lazy(() => import("../pages/Paginas/Registro")));
const Perfil = Loadable(lazy(() => import("../pages/Paginas/Perfil")));


const Router = [
  { path: "", exact: true, element: <Login /> },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "Biblioteca", element: <Biblioteca /> },
      { path: "Registro", element: <Registro /> },
      { path: "Perfil", element: <Perfil /> },
    ],
  },
];

export default Router;
