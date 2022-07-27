import React from 'react';
import '../styles/Button.css'

function Button( props ) {

  const isOperator = ( value ) => {
          //Si no es un numero y tampoco es un punto o igual
    return isNaN( value ) && ( value.trim() !== '.' ) && ( value.trim() !== '=' );
  }

  return(
    <div className={ `button-container ${ isOperator(props.children) ? 'operator' : '' }`.trimEnd() } >
      { props.children }
    </div>
  );
}

export default Button;