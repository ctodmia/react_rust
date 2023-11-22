import './App.css';
import BarChart from './BarChart';
import sunshine from './sunshine.json'
import Select from 'react-select'
import { useState } from 'react'

const options = [
  {value: 'JAN', label: 'January'},
  {value: 'APR', label: 'April'},
  {value: 'DEC', label: 'December'}
]
function bigComputation() {
  alert("Big computation in JavaScript");
}

function App() {
  const [month, setMonth] = useState(options[0])
  const data = sunshine.map(d => {
    return {city: d.CITY, sunshine: d[month.value]}
  })
  .sort((a, b) => b.sunshine - a.sunshine)
  .slice(0, 20);

  console.log(data)
  return (
    <div className="App">
      <h1>Hi there</h1>
      <button onClick={bigComputation}>Run Computation</button>
      <div className="header">
        <Select defaultValue={month} onChange={setMonth} options={options} />
      </div>
      <div className="container">
        <BarChart data={data} height={600} width={900} />
      </div>
    </div>
  );
}

export default App;
