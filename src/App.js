import './App.css';
import Circles from './Circles'

const width = 960
const height = 300
function App() {

  return (
    <div className="App">
      <h1>Changing Circles</h1>
      <Circles height={height} width={width} />
    </div>
  );
}

export default App;
