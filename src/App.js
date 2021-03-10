import React, { useState } from "react"
import './App.css';
import CalculatorFormSga12 from "./Components/CalculatorFormSga12/CalculatorFormSga12";



function App() {

  const [equation, setEquation] = useState({});

  function updateEquation(e) {
    setEquation({
    ...equation, 

    [e.target.id] : [e.target.value]
  })
}

function doOperation() {
  switch(equation.operation) {
    case "add":
      console.log(parseFloat( equation.operand1) + parseFloat( equation.operand2));

      break;

      default:
        console.log("sorry")
        break;
  }
}

  return (
    <div className="App">
     <h1>This is a calculator</h1>
     <CalculatorFormSga12 />
     
    </div>
  );
}

export default App;
