import './App.css';
import Circles from './Circles'

const width = 960
const height = 500
function App() {

  return (
    <div className="App">
      <h1>Random Circles</h1>
      <Circles height={height} width={width} />
    </div>
  );
}

export default App;
