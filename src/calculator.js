import React from "react";
import { useState } from "react";

export default function Calc() {

    const [state, setState] = useState(0);
    const [num, setNum] = useState(0);
    const [sum, setSum] = useState(0);

    // function changeState(e) {
    //     setState(e.target.value);
    //     setNum(e.target.value);
    // }

    console.log('changedState ', state);
    function add() {
        // console.log('b4 addition ', state);
        // setState(Number(state));
        setSum(Number(state)+Number(num));
        setSum(Number(state)*Number(num));
        // console.log('after addition ', state);
    }

    function sub() {
        // console.log('b4 subtraction ', state);
        setSum(Number(state)-Number(num));
        // console.log('after subtraction ', state);
    }

    function mul() {
        // console.log('b4 multiplication ', state);
        setSum(Number(state)*Number(num));
        // console.log('after multiplication ', state);
    }

    function div() {
        setSum(Number(state)/Number(num));
    }
    return(
        <>
            <input type='number' value={state.number} name='number' onChange={(e)=>setState(e.target.value)} /> 
            <input type='number' value={num.numtwo} name='numtwo' onChange={(e)=>setNum(e.target.value)} />

            <button onClick={add}>Add</button>
            <button onClick={sub}>Subtract</button>
            <button onClick={mul}>Multiply</button>
            <button onClick={div}>Divide</button>

            <p>States {state}</p>
            <p>Sum {sum} </p>
        </>
    )
}