import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(5);
  const [color, setColor] = useState("red")
   const [car, setCar] = useState({
              model: "mustang",
              year: "1994",
              brand: "Ford",
              color: "red"
          });

  const Addvalue = () => {
    if (counter < 20) {
      setcounter(counter + 1);
    }
  };
  const removevalue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <div>
      <h1>My {car.brand}</h1>
    <p>
        It is a {car.color} {car.model} from {car.year}
    </p>
        <h1>chai aur react</h1>
        <h2>counter value: {counter}</h2>

        <h3>My faviorite color is {color}</h3>
        <button
        type="button"
        onClick={()=>setColor("blue")}
        >Blue</button>

        <button onClick={Addvalue}>Add Vlue</button>
        <br></br>
        <button onClick={removevalue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
