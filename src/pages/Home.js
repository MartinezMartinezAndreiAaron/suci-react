import React from "react";

import '../App.css';


import NavBarAdmin from '../components/NavBarAdmin';
import NavBarSupervisor from '../components/NavBarSupervisor';

function Home(){
    const tipoUsuario = sessionStorage.getItem("idtipousuario");
    
    return(
        <>
        {
           tipoUsuario === '5' ?(
                <NavBarAdmin></NavBarAdmin>
            ): tipoUsuario === '6' ?(
                <NavBarSupervisor/>
            ):(
                <>
                </>
            )
        } 
            <div className="home">
                <h1>Home</h1>
                <h2>
                    <ion-icon name="shield"></ion-icon></h2>
            </div>
        </>
    );
}

export default Home;