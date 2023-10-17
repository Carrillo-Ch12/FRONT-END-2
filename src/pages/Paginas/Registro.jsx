import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './components/Login.css';

const baseUrl2 = "http://localhost:4001/api/Registro"; 

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre_usuario: '',
      Correo: '',
      Contraseña: '',
      Foto_de_perfil: '', 
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseUrl2, this.state); 
      console.log(response);
      if (response.status === 200) { 
        window.location.href = "/";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  render() {
    return (
      <div>
        <div className="PrincipalRegistro">
          <div className="Secundario">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                <label>Nombre de usuario:</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="Nombre_usuario"
                  value={this.state.Nombre_usuario}
                  onChange={(e) =>
                    this.setState({ Nombre_usuario: e.target.value })
                  }
                />
                <label>Correo:</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="Correo"
                  value={this.state.Correo}
                  onChange={(e) => this.setState({ Correo: e.target.value })}
                />
                <label>Contraseña:</label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="Contraseña"
                  value={this.state.Contraseña}
                  onChange={(e) =>
                    this.setState({ Contraseña: e.target.value })
                  }
                />
                <label>Foto de perfil (url):</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="Foto_de_perfil" 
                  value={this.state.Foto_de_perfil} 
                  onChange={(e) =>
                    this.setState({ Foto_de_perfil: e.target.value }) 
                  }
                />
                <br />
                <button className="btn btn-primary" type="submit">
                  Registrarme
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
