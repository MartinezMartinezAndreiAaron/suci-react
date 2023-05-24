import React from "react";

import '../App.css';

import NavBarSupervisor from '../components/NavBarSupervisor';

function Usuarios(){
    const tipoUsuario = sessionStorage.getItem("idtipousuario");

    return(
        <>
            {
                tipoUsuario === '6' ? (
                    <>
                        <NavBarSupervisor />
                        <div className="reports">
                            <h1>Usuarios</h1>
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )
            }
        </>
    );
}

export default Usuarios;