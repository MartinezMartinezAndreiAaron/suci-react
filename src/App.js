import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';

import Login from './components/Login';
import HomeNav from "./pages/Home";
import Supervisor from "./pages/Supervisor";
import Oficialesviales from "./pages/OficialesViales";
import Reportes from "./pages/Reportes";
import Usuarios from "./pages/Usuarios";
import Configuracion from "./pages/Configuracion";



function App() {

  return (
    <>
      <Link to={"/"} />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<HomeNav />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/oficialesViales" element={<Oficialesviales />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </>
  )
}

export default App;
