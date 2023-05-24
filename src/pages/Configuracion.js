import React from "react";

import '../App.css';

import NavBarAdmin from '../components/NavBarAdmin';
import NavBarSupervisor from '../components/NavBarSupervisor';

function Configuracion(){
    const tipoUsuario = sessionStorage.getItem("idtipousuario");

    return(
        <>
            {
                tipoUsuario === '5' ? (
                    <>
                        <NavBarAdmin></NavBarAdmin>
                        <div className="configuracion">
                            <h1>Configuracion</h1>
                        </div>
                    </>
                ) : tipoUsuario === '6' ? (
                    <>
                    <NavBarSupervisor />
                    <div className="configuracion">
                            <h1>Configuracion</h1>
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

export default Configuracion;