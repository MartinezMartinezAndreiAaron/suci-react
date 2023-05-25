import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import NavBarSupervisor from "../components/NavBarSupervisor";

function Home() {
    let tipoUsuario=localStorage.getItem("idtipousuario");
    let userInfo=JSON.parse(localStorage.getItem("userInfo"))
    return (
    <>
      {(tipoUsuario==="1")?<NavBarSupervisor/>:<NavBarAdmin/>}
      <div className="home">
        <h1>Home</h1>
        <h2>Bienvenido {userInfo.idpersonafk.nombres}</h2>
        <h2>
          <ion-icon name="shield"></ion-icon>
        </h2>
      </div>
    </>
  );
}

export default Home;
