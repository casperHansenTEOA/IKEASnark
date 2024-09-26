// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <h1>Snark</h1>
      <Card startImage="https://picsum.photos/300/200" title="Card Title">
        <p>Card content</p>
      </Card>
      <div className="card"></div>
    </div>
  );
}

export default App;
