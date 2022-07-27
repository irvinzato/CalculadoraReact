import './App.css';
import logoIr from './images/logo-IR.png'
import Button from './components/Button';
import Pantalla from './components/Pantalla';

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
             src={ logoIr } 
             alt='Logo elegido' />
      </div>
      <div className='calculator-container'>
        <Pantalla 
         value='2' />
        <div className='row'>
          <Button> 1 </Button>
          <Button> 2 </Button>
          <Button> 3 </Button>
          <Button> + </Button>
        </div>
        <div className='row'>
          <Button> 4 </Button>
          <Button> 5 </Button>
          <Button> 6 </Button>
          <Button> - </Button>
        </div>
        <div className='row'>
          <Button> 7 </Button>
          <Button> 8 </Button>
          <Button> 9 </Button>
          <Button> * </Button>
        </div>
        <div className='row'>
          <Button> = </Button>
          <Button> 0 </Button>
          <Button> . </Button>
          <Button> / </Button>
        </div>
        <div className='row'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
