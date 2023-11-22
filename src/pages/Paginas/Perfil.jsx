// components/Perfil.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Perfil.css';

const Perfil = () => {
  const [perfil, setPerfil] = useState({});
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [nuevoCorreo, setNuevoCorreo] = useState('');
  const [Nombre_perfil, setNombrePerfil] = useState(sessionStorage.getItem('Nombre'));

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/Perfil/${Nombre_perfil}`);
        console.log('API response:', response.data);
        setPerfil(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchPerfil();
  }, []);



  const handleNombreChange = (event) => {
    setNuevoNombre(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setNuevaContrasena(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setNuevoCorreo(event.target.value);
  };

  const handleNombreSubmit = async () => {
    try {
      const res = await axios.post(`http://localhost:4001/MODnombre/${Nombre_perfil}/${nuevoNombre}`);
      if (res.status === 200) {
        sessionStorage.setItem('Nombre', nuevoNombre);
        window.location.href = "/Perfil";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (err) {
      console.error('Error cambiando la contraseña:', err);
    }
  };
  

  const handleContrasenaSubmit = async () => {
    try {
      const res = await axios.post(`http://localhost:4001/MODcontrasena/${Nombre_perfil}/${nuevaContrasena}`);
      if (res.status === 200) {
        window.location.href = "/Perfil";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (err) {
      console.error('Error cambiando la contraseña:', err);
    }
  };

  const handleCorreoSubmit = async () => {
    try {
      const res =await axios.post(`http://localhost:4001/MODcorreo/${Nombre_perfil}/${nuevoCorreo}`);
      if (res.status === 200) {
        window.location.href = "/Perfil";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (err) {
      console.error('Error cambiando el correo:', err);
    }
  };

  return (
    <div>
      <div className='cuadro1'>
        <div className='Foto'> <img src={perfil.Foto_de_perfil} alt="Foto de perfil" /></div>
        <div className='cuadro2'>
          <div className='Datos'>
            <h4>Nombre de perfil: {perfil.Nombre_usuario}</h4>
            <h6>Cambiar Nombre:</h6>
            <input type="text" className="form-control" name="Nombre_usuario" value={nuevoNombre} onChange={handleNombreChange} />
            <button className="btn btn-primary" onClick={handleNombreSubmit}>Guardar</button>
            <h4>Email: {perfil.Correo}</h4>
            <h6>Cambiar Correo:</h6>
            <input type="text" className="form-control" name="Correo" value={nuevoCorreo} onChange={handleCorreoChange} />
            <button className="btn btn-primary" onClick={handleCorreoSubmit}>Guardar</button>
            <h4>Contraseña: {perfil.Contraseña}</h4>
            <h6>Cambiar contraseña </h6>
            <input type="text" className="form-control" name="Contraseña" value={nuevaContrasena} onChange={handleContrasenaChange} />
            <button className="btn btn-primary" onClick={handleContrasenaSubmit}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
