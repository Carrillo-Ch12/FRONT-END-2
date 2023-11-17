import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Perfil = () => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    var Nombre_perfil = sessionStorage.getItem('Nombre');

    const fetchPerfil = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/Perfil/${Nombre_perfil}`);
        console.log('API response:', response.data);
        setPerfil(response.data); // No necesitas indexar [0] ya que la respuesta debe contener directamente el objeto del perfil
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchPerfil();
  }, []);

  return (
    <div>
      <h2>{} hola</h2>
      <p>Perfil: {perfil.Nombre_usuario}</p>
      <p>Email: {perfil.Correo}</p>
      <p>Contraseña: {perfil.Contraseña}</p> {/* Agregado para mostrar la contraseña */}
    </div>
  );
};

export default Perfil;
