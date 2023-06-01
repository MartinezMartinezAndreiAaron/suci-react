import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  let tipoUsuario = sessionStorage.getItem("idtipousuario");
  return tipoUsuario ? children : <Navigate to={"/"} />;
}

export default PrivateRoute;
