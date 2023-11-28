import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Juego.css';

const Juego = () => {
  const [Juego, setJuego] = useState({});
  const [Generos, setGeneros] = useState([]);
  const [Plataformas, setPlataformas] = useState([]);
  const [Nombre_perfil, setNombrePerfil] = useState(sessionStorage.getItem('Nombre'));
  const [Nombre_juego,serNombreJuego] = useState(sessionStorage.getItem('Juego'));
  const [comentarios, setComentarios] = useState([]);
  const [Texto, setTexto] = useState('');
  useEffect(() => {

    const fetchJuego = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/Juego/Juego/${Nombre_juego}`);
        console.log('API response:', response.data);
        setJuego(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    const fetchPlataformas = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/Juego/Plataforma/${Nombre_juego}`);
        console.log('API response:', response.data);
        setPlataformas(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    const fetchGeneros = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/Juego/Genero/${Nombre_juego}`);
        console.log('API response:', response.data);
        setGeneros(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchJuego();
    fetchPlataformas();
    fetchGeneros();
  }, []);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/mostrar/nosql/${Nombre_juego}`);
        setComentarios(response.data.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComentarios();
  }, [Nombre_juego]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const comentarioData = {
      idUsuario: Nombre_perfil,
      Titulo: Nombre_juego,
      Texto
    };

    try {
      const response = await fetch('http://localhost:4001/create/nosql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comentarioData)
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  const formatearFecha = (fecha) => {
    const opcionesFecha = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opcionesFecha);
  };
  const handleAgregarJuego = async () => {
    try {
      const res =await axios.post(`http://localhost:4001/Lista_juegos/agregar/${Nombre_perfil}/${Nombre_juego}`);
      if (res.status === 200) {
        window.location.href = "/Biblioteca";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (err) {
      console.error('Error al agregar el juego:', err);
    }
  };
  const handleEliminarJuego = async () => {
    try {
      const res =await axios.post(`http://localhost:4001/Lista_juegos/Eliminar/${Nombre_perfil}/${Nombre_juego}`);
      if (res.status === 200) {
        window.location.href = "/Lista_juegos";
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (err) {
      console.error('Error al agregar el juego:', err);
    }
  };

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
                  <label htmlFor="generos">Generos:</label>
                  <ul>
                    {Generos.map((genero, Nombre_genero) => (
                      <li key={Nombre_genero}>{genero.Nombre_genero}</li>
                    ))}
                  </ul>
                </div>
                <div className='plataforma'>
                  <label htmlFor="plataforma">Plataformas:</label>
                  <ul>
                    {Plataformas.map((plataforma, Nombre_plataforma) => (
                      <li key={Nombre_plataforma}>{plataforma.Nombre_plataforma}</li>
                    ))}
                  </ul>
                </div>
                <div className='Likes'>
                  <label htmlFor="Likes">Likes:</label>
                  <p>{Juego.Likes}</p>
                </div>
                <div className='buttons'>
                  <p>
                    <button className='button-heart' onClick={handleAgregarJuego}>
                      Agregar a la lista
                    </button>
                    <button className='button-heart' onClick={handleEliminarJuego}>
                      Eliminar de la lista
                    </button>
                  </p>
                </div>
                <p>Fecha de lanzamiento: {formatearFecha(Juego.Año_de_lanzamiento)}</p>
              </aside>
            </aside>
          </div>
          <div className='info-abajo'>
            <label htmlFor="descripción">
              <strong>Descripción:</strong>
              <p>{Juego.Descripcion}</p>
            </label>
          </div>
        </div>
        <div className='Comentarios-section'>
          <div className='Titulo'>
            <h2>Comentarios</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Texto">Haz un comentario:</label>
            <textarea id="Texto" name="Texto" value={Texto} onChange={(e) => setTexto(e.target.value)} required></textarea>
            <br />
            <button type="submit">Enviar Comentario</button>
         </form>
        </div>
        <div className='Comentarios'>
            <h2>Comentarios para {Nombre_juego}</h2>
            <ul>
              {comentarios.map((comentario) => (
                <li key={comentario._id}>
                  <p>{comentario.idUsuario}</p>
                  <p>{comentario.Texto}</p>
                  <p>{formatearFecha(comentario.timestamp)}</p>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Juego;
