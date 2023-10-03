import React, { Component } from 'react'
import '../Components/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const baseUrl="http://localhost:4001/usuarios";


export default class Login extends Component {
  state={
    form:{
        username: '',
        password: ''
    }
}

handleChange=async e=>{
  await this.setState({
      form:{
          ...this.state.form,
          [e.target.name]: e.target.value
      }
  });
}

iniciarSesion=async()=>{
  await axios.get(baseUrl, {params: {Nombre_usuario: this.state.form.username, Contraseña: this.state.form.password}})
  .then(response=>{
      return response.data;
  })
  .then(response=>{
      if(response.length>0){
          var respuesta=response[0];
          window.location.href="./Biblioteca";
      }else{
          alert('El usuario o la contraseña no son correctos');
      }
  })
  .catch(error=>{
      console.log(error);
  })

}
  
render() {
  return (
<div className="Principal">
  <div className="Secundario">
    <div className="form-group">
      <label>Usuario: </label>
      <br />
      <input
        type="text"
        className="form-control"
        name="username"
        onChange={this.handleChange}
      />
      <br />
      <label>Contraseña: </label>
      <br />
      <input
        type="password"
        className="form-control"
        name="password"
        onChange={this.handleChange}
      />
      <br />
      <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
    </div>
  </div>
</div>
  );
}
}
