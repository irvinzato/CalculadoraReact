import './App.css';
import logoIr from './images/logo-IR.png'
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
             src={ logoIr } 
             alt='Logo elegido' />
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Button> 1 </Button>
          <Button> + </Button>
        </div>
        <div className='row'>
          <Button> 2 </Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
