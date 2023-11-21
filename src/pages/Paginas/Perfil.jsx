import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Perfil.css'

const Perfil = () => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    var Nombre_perfil = sessionStorage.getItem('Nombre');

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

  return (
    <div>
      <div className='cuadro1'>
        <div className='Foto'> <img src={perfil.Foto_de_perfil} alt="Foto de perfil" /></div>
        <div className='cuadro2'>
          <div className='Datos'>
            <p>Perfil: {perfil.Nombre_usuario}</p>
            <p>Email: {perfil.Correo}</p>
            <p>Contraseña: {perfil.Contraseña}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Perfil;
