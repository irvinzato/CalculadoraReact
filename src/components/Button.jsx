import React from 'react';
import '../styles/Button.css'

function Button( props ) {

  const isOperator = ( value ) => {
          //Si no es un numero y tampoco es un punto o igual
    return isNaN( value ) && ( value.trim() !== '.' ) && ( value.trim() !== '=' );
  }

  return(
    <div className={ `button-container ${ isOperator(props.children) ? 'operator' : '' }`.trimEnd() } 
         onClick={ () => props.handleClick( props.children.trim() ) }>
          {/* Se usa "() => props.hancleClick( props.children )" por que escribiendo la funcion flecha es una funcion como tal, sin la flecha es un llamado a la funcion que retorna un valor*/}
      { props.children }
    </div>
  );
}

export default Button;