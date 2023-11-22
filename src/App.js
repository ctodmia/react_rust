import './App.css';
import Circles from './Circles'
import { useState } from 'react'

const width = 960
const height = 500
function App() {

  return (
    <div className="App">
      <h1>Hi there</h1>
      <Circles height={height} width={width} />
    </div>
  );
}

export default App;
