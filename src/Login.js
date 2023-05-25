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
    contraseña: ""
  }
  );

  const [error, seterror] = useState({
     error: false,
      errorMsg: "" 
    });

    const [loading, setloading] = useState({
      loading:false

    });

  const navigate = useNavigate();

  const mandejadorSubmit = (e) => {
    e.preventDefault();
    manejadorBoton();
    setloading({
      loading: true
    })
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
      if (tUsuario === 5  ||  tUsuario === 6 ){
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
      }else {
        seterror({
          error: true,
          errorMsg: "Error: Usuario no encontrado",
        });
        setloading({
          loading: false
        });
    }
  }else if(response === "errorConexion"){
    seterror({
      error: true,
      errorMsg: "Error: Ocurrio un problema",
    });
    setloading({
      loading: false
    });
  }else if (response=== "UYCI"){
    seterror({
      error: true,
      errorMsg: "Usuario y/o Constraseña Incorrectos",
    });
    setloading({
      loading: false
    });
  }else {
    seterror({
      error: true,
      errorMsg: "Usuario y/o Constraseña Incorrectos",
    });
    setloading({
      loading: false
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
                  required
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
                  required
                  onChange={(e) => manejadorChange(e)}
                />
              </div>
              {error.error === true && (
                <div className="alert alert-danger" role="alert">
                  {error.errorMsg}
                </div>
              )}
              <br />
              <button type="submit" className="btn btn-black" disabled={loading.loading}>
              {loading.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
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
