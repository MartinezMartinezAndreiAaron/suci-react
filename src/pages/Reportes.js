import React from "react";

import '../App.css';

import NavBarSupervisor from '../components/NavBarSupervisor';


function Reportes(){

    const tipoUsuario = sessionStorage.getItem("idtipousuario");

    return(
        <>
            {
                tipoUsuario === '6' ? (
                    <>
                        <NavBarSupervisor />
                        <div className="reports">
                            <h1>Reportes</h1>
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

export default Reportes;