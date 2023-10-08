import React, { Component } from 'react'
import '../Components/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const baseUrl="http://localhost:4001/usuarios";


export default class Login extends Component {

render() {
  return (

  <div className="Principal">
    <div className="form-group">
      <label>Usuario: </label>
      <br />
      <input
        type="text"
        className="form-control"
        name="username"
        
      />
      <br />
      <label>Contraseña: </label>
      <br />
      <input
        type="password"
        className="form-control"
        name="password"
      />
      <br />
      <button className="btn btn-primary" >Iniciar Sesión</button>
    </div>
  </div>

  );
}
}