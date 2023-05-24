import React from "react";

import '../App.css';

import NavBarAdmin from '../components/NavBarAdmin';

function Oficialesviales(){
    const tipoUsuario = sessionStorage.getItem("idtipousuario");

    return(
        <>
            {
                tipoUsuario === '5' ? (
                    <>
                        <NavBarAdmin></NavBarAdmin>
                        <div className="reports">
                            <h1>Oficiales Viales</h1>
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

export default Oficialesviales;