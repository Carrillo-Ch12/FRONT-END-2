
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components/Lista_juegos.css';

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

  const formatearFecha = (fecha) => {
    const opcionesFecha = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opcionesFecha);
  };

  return (
    <div className="lista-container">
      {listaJuegos.map((juego, index) => (
        <div key={index} className="juego-card">
          <h2>{juego.Titulo}</h2>
          <img src={juego.Portada} alt={`Portada del juego ${juego.Titulo}`} />
        </div>
      ))}
    </div>
  );
};

export default Lista_juegos;
