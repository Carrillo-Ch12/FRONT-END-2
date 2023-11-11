import React, { useState } from 'react';
import './components/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseUrl = "http://localhost:4001/api/log";

const Login = () => {
  const [form, setForm] = useState({
    Nombre_usuario: '',
    Contraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseUrl, form);
      console.log(response);
      if (response.status === 200) {
        window.location.href = "/Biblioteca";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  return (
    <div>
      <div className="Principal">
        <div className="Secundario">
          <div className="form-group">
            <form onSubmit={handleSubmit}>
              <label>Usuario:</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="Nombre_usuario"
                value={form.Nombre_usuario}
                onChange={handleChange}
              />
              <br />
              <label>Contraseña:</label>
              <br />
              <input
                type="password"
                className="form-control"
                name="Contraseña"
                value={form.Contraseña}
                onChange={handleChange}
              />
              <br />
              <button className="btn btn-primary" type="submit">
                Iniciar sesión
              </button>
              <br />
              <br />
              <button className="btn btn-primary">
                <a href="/Registro" style={{ textDecoration: 'none', color: 'inherit' }}>Registrarme</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
