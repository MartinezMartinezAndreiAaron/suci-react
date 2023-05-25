import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarDataAdmin = [
    {
        title: "Inicio",
        path: "/home",
        icons: <AiIcons.AiFillHome/>,
        cName: "nav-text",
    },
    {
        title: "Supervisor",
        path: "/supervisor",
        icons: <ion-icon name="accessibility"></ion-icon>,//<FaIcons.FaCartPlus/>,
        cName: "nav-text",
    },
    {
        title: "Oficiales Viales",
        path: "/oficialesviales",
        icons: <ion-icon name="shield"></ion-icon>,//<IoIcons.IoIosPaper/>,
        cName: "nav-text",
    },
    {
        title: "Configuracion",
        path: "/configuracion",
        icons: <ion-icon name="settings"></ion-icon>,
        cName: "nav-text",
    }
]