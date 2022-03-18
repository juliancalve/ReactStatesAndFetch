import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
// import { Title } from './components/Title/Title';

const App = () => {

  // const [name, setName] = useState('Pepito');
  // const [counter, setCounter] = useState(0);
  
  // let name = 'Pepito';
  // const num1 = 1;
  // const num2 = 2;
  
  // const changeName = () => {
    //   console.log('antes', name);
    //   setName('Fede');
  //   alert(name);
  // }

  // useEffect(() => {
  //   console.log('Me ejecute');
  // }, [name]);

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter])

  // useEffect(() => {
  //   console.log('Me ejecuto una unica vez y nunca mas');
  // }, []);

  // useEffect(() => {
  //   console.log('ESCUCHO COUNTER Y NAME');
  // }, [counter, name]);

  //mount
  //update
  //destroy

  const [flag, setFlag] = useState(true);
  const name = 3;

  const consologuear = () => {
    console.log('Me clickeaste');
  }

  const abrirGoogle = () => {
    window.open('https://google.com');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* { flag && <Title /> } */}
        <button onClick={() => setFlag(!flag)}>Clickeame</button>
        <Button title="Boton1" handleClick={consologuear}/>
        <Button title="Abrir google" handleClick={abrirGoogle} >
          <div>
            <Title subtitle={name} pepito="1234" title="Pastas" />
            <span>Hola soy un span y funco como children</span>
          </div>
        </Button>
        {/* <button onClick={changeName}>Cambiar nombre</button> */}
        {/* {counter} */}
        {/* <button onClick={() => setCounter(counter+1)}>Sumar Counter</button> */}
      </header>
    </div>
  );
}

export default App;
