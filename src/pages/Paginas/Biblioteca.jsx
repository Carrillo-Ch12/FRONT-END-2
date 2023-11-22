import React, { useState, useEffect } from "react";
import axios from 'axios';
import './components/Biblioteca.css'; 
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:4001/biblioteca";

export const Biblioteca = () => {
  const [videojuegos, setVideojuegos] = useState([]); 

  const getVideojuegos = async () => {
    try {
      const response = await axios.get(baseUrl);
      setVideojuegos(response.data); 
    } catch (error) {
      console.error("Error al obtener los videojuegos", error);
    }
  };

  useEffect(() => {
    getVideojuegos();
  }, []);
  const guardarEnSessionStorage = (titulo) => {
    sessionStorage.setItem('Juego', titulo);
  };

  return (
    <>
      <p>Se encontraron {videojuegos.length} resultados</p>
      <div className="videojuegos-list">
        {videojuegos.map(videojuego => (
          <Link 
            to={`/Juego`}
            key={videojuego.titulo}
            className="card-videojuego"
            onClick={() => guardarEnSessionStorage(videojuego.titulo)}
          >
            <div className="videojuego-item">
              <img src={videojuego.img} alt={videojuego.titulo} />
              <p>{videojuego.titulo}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
};

export default Biblioteca;


