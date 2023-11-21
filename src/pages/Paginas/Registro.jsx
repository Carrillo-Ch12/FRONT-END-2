import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './components/Login.css';

const baseUrl2 = "http://localhost:4001/api/Registro";

const Registro = () => {
  const [form, setForm] = useState({
    Nombre_usuario: '',
    Correo: '',
    Contraseña: '',
    Foto_de_perfil: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseUrl2, form);
      console.log(response);
      if (response.status === 201) {
        window.location.href = "/";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  return (
    <div>
      <div className="PrincipalRegistro">
        <div className="Secundario">
          <div className="form-group">
            <form onSubmit={handleSubmit}>
              <label>Nombre de usuario:</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="Nombre_usuario"
                value={form.Nombre_usuario}
                onChange={(e) =>
                  setForm({ ...form, Nombre_usuario: e.target.value })
                }
              />
              <label>Correo:</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="Correo"
                value={form.Correo}
                onChange={(e) =>
                  setForm({ ...form, Correo: e.target.value })
                }
              />
              <label>Contraseña:</label>
              <br />
              <input
                type="password"
                className="form-control"
                name="Contraseña"
                value={form.Contraseña}
                onChange={(e) =>
                  setForm({ ...form, Contraseña: e.target.value })
                }
              />
              <label>Foto de perfil (url):</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="Foto_de_perfil"
                value={form.Foto_de_perfil}
                onChange={(e) =>
                  setForm({ ...form, Foto_de_perfil: e.target.value })
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
};

export default Registro;
