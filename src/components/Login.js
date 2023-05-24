import React, { useState } from "react";
//css
import "../assets/Login.css";
//servicios
import { login } from "../services/UsuarioSevice";
//libreria
import { useNavigate } from "react-router-dom";


function Login() {
  const [usuario, setusuario] = useState({ 
    usuario: "", 
    contraseña: "" }
    );

  const [error, seterror] = useState({
     error: false,
      errorMsg: "" 
    });

  const navigate = useNavigate();

  const mandejadorSubmit = (e) => {
    e.preventDefault();
    manejadorBoton();
  };

  const manejadorChange = (e) => {
    setusuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const manejadorBoton = async () => {
    let response = await login(usuario);
    if (response.status === 200){
      let tUsuario = response.data.tipousuariofk.idtipousuario;
      if (tUsuario === 5 ){
        sessionStorage.setItem("idusuario",
        response.data.idusuarios
      );
      sessionStorage.setItem(
        "idpersona",
        response.data.idpersonafk.idpersona
      );
      sessionStorage.setItem(
        "idtipousuario",
        response.data.tipousuariofk.idtipousuario
      );
      navigate("/home");
      }else if (tUsuario === 6) {
        sessionStorage.setItem("idusuario", response.data.idusuarios);
        sessionStorage.setItem(
          "idpersona",
          response.data.idpersonafk.idpersona
        );
        sessionStorage.setItem(
          "idtipousuario",
          response.data.tipousuariofk.idtipousuario
        );
        navigate("/home");
      } else {
        seterror({
          error: true,
          errorMsg: "Error: Usuario no encontrado",
        });
    }
  }else {
    seterror({
      error: true,
      errorMsg: "Usuario y/o Constraseña Incorrectos",
    });
  }
};

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Supervisión Ciudadana "SuCi"</h2>
          <div className="icon-login">
            <ion-icon name="shield"></ion-icon>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form
              onSubmit={(event) => {
                mandejadorSubmit(event);
              }}
            >
              <div className="form-group">
                <label>Usuario: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="usuario"
                  placeholder="Email"
                  onChange={(e) => manejadorChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Contraseña: </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="contraseña"
                  placeholder="Contraseña"
                  onChange={(e) => manejadorChange(e)}
                />
              </div>
              {error.error === true && (
                <div className="alert alert-danger" role="alert">
                  {error.errorMsg}
                </div>
              )}
              <br />
              <button type="submit" className="btn btn-black">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
        <div>
          <br />
          <a className="suci-fondo" href="###">
            ¿Olvidaste la contraseña?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
