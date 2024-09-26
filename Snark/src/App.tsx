// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <h1>Snark</h1>
      <Card startImage="src/assets/bed-img.jpg" title="Card Title">
        <p>Card content</p>
      </Card>
      <Card title="Card Title">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          officiis molestias minus ex, rem quidem. Amet id sequi quisquam ullam
          numquam nisi. Nihil fuga, repellendus totam similique libero quidem
          quia.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa vitae
          eum numquam. Id, est atque. Vel aut, quasi facere impedit, voluptates
          reiciendis numquam adipisci minima nobis quas ipsa, magni doloribus?
        </p>
      </Card>
    </div>
  );
}

export default App;
