import React, { useState, useEffect } from "react";
import PageContainer from "../../components/container/PageContainer";
import axios from 'axios';
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:4001/biblioteca";

export const Biblioteca = () => {
  const [videojuegos, setVideojuegos] = useState([]); // Definir el estado inicial como un arreglo vacío

  const getVideojuegos = async () => {
    try {
      const response = await axios.get(baseUrl);
      setVideojuegos(response.data); // Actualizar el estado con los datos obtenidos
    } catch (error) {
      console.error("Error al obtener los videojuegos", error);
    }
  };

  useEffect(() => {
    getVideojuegos();
  }, []);

  return (
    <>
      <p>Se encontraron {videojuegos.length} resultados</p>
      <div>className = videojuegos.list</div>
        {videojuegos.map(videojuego => (
          <Link>
            <div className="videoJuegos-list">
              <img src={videojuego.img} alt={videojuego.titulo}/>
            </div>
          </Link>
        
        ))}
    </>
  )
};

export default Biblioteca;

