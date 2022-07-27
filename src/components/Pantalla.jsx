import React from "react";
import '../styles/Pantalla.css';

//No necesariamente debe ser "function" el componente, tambien puedo definirlo de esta manera
const Pantalla = ({ value }) => (
  <div className='entered-value'>
    { value }
  </div>
);

export default Pantalla;