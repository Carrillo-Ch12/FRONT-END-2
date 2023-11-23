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
    <div className='main-juego-page'>
      <div className='left-side'>
        <div className='contenedor-banner'>
          <div className='asides'>

            <aside className='banner-Foto'><img src={Juego.Portada} alt="Foto de perfil" /></aside>
            <aside className='banner-info'>
              <aside className='show-info'>
                <h2>{Juego.Titulo}</h2>
                <div className='generos'>
                  <label for ="generos">Generos:</label>
                  <p>{Juego.genero}</p>
                </div>
                <div className='plataforma'>
                  <label for="plataforma">Plataforma:</label>
                  <p>{Juego.plataforma}</p>
                </div>
                <div className='Likes'>
                  <label for="Likes">Likes:</label>
                  <p>{Juego.Likes}</p>
                </div>
                <div className='buttons'>
                  <p>
                    <button className='button-heart'>
                      Poner boton agregar a lista
                    </button>
                  </p>
                </div>
                <p>Fecha de lanzamiento: {Juego.Año_de_lanzamiento}</p>
              </aside>
            </aside>
          </div>
          <div className='info-abajo'>
            <label for="descripción">
              <strong>Descripción:</strong>
              <p>{Juego.Descripcion}</p>
            </label>
              
          </div>
          
        </div>
        <div className='Comentarios-section'>
          <div className='Titulo'>
            <h2>Comentarios</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
