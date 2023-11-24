
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components/Lista_juegos.css';
import { Link } from "react-router-dom";

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
  const guardarEnSessionStorage = (titulo) => {
    sessionStorage.setItem('Juego', titulo);
  };

  return (
    <div className="lista-container">
      {listaJuegos.map((juego, index) => (
        
        <Link key={index} className="juego-card" to={`/Juego`} onClick={() => guardarEnSessionStorage(juego.Titulo)} >
          <h2>{juego.Titulo}</h2>
          <img src={juego.Portada} alt={`Portada del juego ${juego.Titulo}`} />
        </Link>
      ))}
    </div>
  );
};

export default Lista_juegos;
