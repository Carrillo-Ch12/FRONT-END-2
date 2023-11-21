import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Juego.css';

const Perfil = () => {
  const [Juego, setjuego] = useState({});

  useEffect(() => {
    var Nombre_juego = sessionStorage.getItem('Juego');

    const fetchjuego = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/Juego/${Nombre_juego}`);
        console.log('API response:', response.data);
        setjuego(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchjuego();
  }, []);

  return (
    <div className='Caja1'>
        <div className='Foto'><img src={Juego.Portada} alt="Foto de perfil" /></div>
        <p>Nombre: {Juego.Titulo}</p>
        <p>Descripcion: {Juego.Descripcion}</p>
        <p>Fecha de lanzamiento: {Juego.Año_de_lanzamiento}</p>
    </div>
  );
};

export default Perfil;
