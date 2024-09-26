// import { useState } from 'react'

import "./Root.css";
import Card from "../components/Card/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <h1>Snark</h1>
      <Card startImage="src/assets/bed-img.jpg">
        <h2>About the bed</h2>
        <p>
          The temperature-controlled smart bed adjusts automatically to your set
          sleep temperature, ensuring optimal comfort all night long.
        </p>
        <p>
          As you enter the room, the lights can trigger the bed's cooling
          system, preparing the bed to your preferred temperature before you
          even lie down.
        </p>
      </Card>
      <Card>
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
