import React from 'react'
import './App.css';
import Intervalo from './components/Intervalo'
import Card from './components/Card'
import Sorteio from './components/Sorteio'
import Soma from './components/Soma'
import Media from './components/Media'

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='Linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='Linha'>
      <Soma></Soma>
      <Media></Media>
      <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
