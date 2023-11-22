import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

function bigComputation() {
  alert("Big computation in JavaScript");
}

const App = () => {
  return (
    <div>
      <h1>Hi there</h1>
      <button onClick={bigComputation}>Run Computation</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
