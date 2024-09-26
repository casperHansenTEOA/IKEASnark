// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <h1>Snark</h1>
      <Card startImage="https://via.placeholder.com/150" title="Card Title" />
      <div className="card"></div>
    </div>
  );
}

export default App;
