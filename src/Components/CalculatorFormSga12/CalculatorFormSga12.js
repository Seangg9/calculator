import React from "react"

function CalculatorFormSga12(props){
    return(
        <div className="row">
            <div className="col-4">
            <label for="operand1" className= "col-2 col-form--label">Operand 1</label>

                <input type="text" className="form-control-plaintext" id="operand1" onChange={props.update}></input>

            </div>
            <select className="form-select" id="operation" onChange={props.update}></select>
            <div className="col-4">
                <label for="operand2" className= "col-2 col-form--label">Operand 2</label>
                <input type="text" className="form-control-plaintext" id="operand2" onChange={props.update}></input>
                <button onClick={props.action}>GO!</button>
            </div>
            
        </div>
        
    )
}

export default CalculatorFormSga12;