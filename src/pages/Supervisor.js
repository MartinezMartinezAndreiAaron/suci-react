import React from "react";

import '../App.css';

import NavBarAdmin from '../components/NavBarAdmin';

function Supervisor(){
    const tipoUsuario = sessionStorage.getItem("idtipousuario");

    return(
        <>
            {
                tipoUsuario === '5' ? (
                    <>
                        <NavBarAdmin/>

                        <div className="products">
                            <h1>Supervisor</h1>
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

export default Supervisor;