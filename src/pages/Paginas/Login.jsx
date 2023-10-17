import React, { Component } from 'react';
import './components/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const baseUrl = "http://localhost:4001/api/log";

export default class Login extends Component {
  state = {
    form: {
      Nombre_usuario: '',
      Contraseña: '',
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseUrl, this.state.form);
      console.log(response);
      if (response.status=200) {
        window.location.href = "/Biblioteca";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  render() {
    return (
      <div >
        <div className="Principal">
          <div className="Secundario">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                <label>Usuario:</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="Nombre_usuario"
                  value={this.state.form.Nombre_usuario}
                  onChange={this.handleChange}
                />
                <br />
                <label>Contraseña:</label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="Contraseña"
                  value={this.state.form.Contraseña}
                  onChange={this.handleChange}
                />
                <br />
                <button className="btn btn-primary" type="submit">
                  Iniciar sesión
                </button>
                <br />
                <br />
                <button className="btn btn-primary" type="submit">
                <a href="/Registro" style={{ textDecoration: 'none', color: 'inherit' }}>Registrarme</a>
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
