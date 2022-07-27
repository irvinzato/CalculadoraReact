import './App.css';
import logoIr from './images/logo-IR.png'

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
             src={ logoIr } 
             alt='Logo elegido' />
      </div>
    </div>
  );
}

export default App;
