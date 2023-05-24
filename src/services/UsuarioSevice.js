import axios from "axios";

const baseUrl = "http://localhost:8080/";

export async function login(usuario) {
    let res = {};

    await axios.post(baseUrl + "usuarios/login", usuario).then(response => {
        res = response;
    });
    
    return res;

}


