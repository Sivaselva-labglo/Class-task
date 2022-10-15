import React from "react";
import { useState } from "react";

export default function Changingstate() {
    const box = { height: '250', width: '350', bgColor: 'seagreen', text:'Welcome all!'}
    const [state, setState] = useState(box);

    function updateColor(e) {
        setState({...state, [e.target.name] : [e.target.value]})
    }
    return (
        <div>
           
            <div style={{height:'250',width:'350',padding:'75px'}}>
                <label>BgColor </label>
                <input type='text' name='bgColor' value={state.bgColor} onChange={updateColor}/> <br/> <br/>

                <label>Height </label>
                <input type='text' name='height' value={state.height} onChange={updateColor}/> <br/> <br/>

                <label>Width </label>
                <input type='text' name='width' value={state.width} onChange={updateColor}/> <br/> <br/>

                <label>Text </label>
                <input type='text' name='text' value={state.text} onChange={updateColor}/> 
            </div>


            <div style={{ backgroundColor: state.bgColor, height: Number(state.height), width: Number(state.width), position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <h3>{state.text}</h3>
            </div>
           
            
        </div>
    )
}