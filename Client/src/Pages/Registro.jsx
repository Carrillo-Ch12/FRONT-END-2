import React, { Component } from 'react'
import '../Components/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Registro() {
  return (

    <div className="Principal">
      <div className="form-group">
        <h2>Registro</h2>
        <br />
        <label>Usuario: </label>
        <br />
        <input type="text"className="form-control"name="username"/>
        <label>Correo: </label>
        <br />
        <input type="text" className="form-control"name="username"/>
        <label>Contraseña: </label>
        <br />
        <input type="password"className="form-control"name="password"/>
        <br />
        <a href="/Registro"><button className="btn btn-primary" >Registrarme</button></a>
        
      </div>
    </div>
  
    );
  
}
