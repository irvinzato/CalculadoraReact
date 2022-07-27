import { useState } from 'react';

import './App.css';
import logoIr from './images/logo-IR.png'
import Button from './components/Button';
import Pantalla from './components/Pantalla';
import ButtonClear from './components/ButtonClear';

function App() {

  const [ enteredValue, setEnteredValue ] = useState('');

  const addValue = ( val ) => {
    setEnteredValue( enteredValue + val );
  }

  const clearValue = () => {
    setEnteredValue('');
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
             src={ logoIr } 
             alt='Logo elegido' />
      </div>
      <div className='calculator-container'>
        <Pantalla 
         value={ enteredValue } />
        <div className='row'>
          <Button handleClick={ addValue }> 1 </Button>
          <Button handleClick={ addValue }> 2 </Button>
          <Button handleClick={ addValue }> 3 </Button>
          <Button handleClick={ addValue }> + </Button>
        </div>
        <div className='row'>
          <Button handleClick={ addValue }> 4 </Button>
          <Button handleClick={ addValue }> 5 </Button>
          <Button handleClick={ addValue }> 6 </Button>
          <Button handleClick={ addValue }> - </Button>
        </div>
        <div className='row'>
          <Button handleClick={ addValue }> 7 </Button>
          <Button handleClick={ addValue }> 8 </Button>
          <Button handleClick={ addValue }> 9 </Button>
          <Button handleClick={ addValue }> * </Button>
        </div>
        <div className='row'>
          <Button handleClick={ addValue }> = </Button>
          <Button handleClick={ addValue }> 0 </Button>
          <Button handleClick={ addValue }> . </Button>
          <Button handleClick={ addValue }> / </Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={ clearValue }> Clear </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
