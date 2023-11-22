import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lista_juegos = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    var nombrePerfil = sessionStorage.getItem('Nombre');
    const fetchListaJuegos = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/Lista_juegos/obtener/${nombrePerfil}`);
        console.log('API response:', response.data);
        setListaJuegos(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchListaJuegos();
  }, []);

  // Función para formatear la fecha
  const formatearFecha = (fecha) => {
    const opcionesFecha = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opcionesFecha);
  };

  return (
    <div>
      {listaJuegos.map((juego, index) => (
        <div key={index}>
          <h2>{juego.Titulo}</h2>
          <p>{juego.Descripcion}</p>
          <p>Año de lanzamiento: {formatearFecha(juego.Año_de_lanzamiento)}</p>
          <img src={juego.Portada} alt={`Portada del juego ${juego.Titulo}`} />
          <p>Likes: {juego.Likes}</p>
        </div>
      ))}
    </div>
  );
};

export default Lista_juegos;
