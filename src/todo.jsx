import React from "react";
import { useState } from "react";
// import './todo.css'

export default function Todo() {
    const [tasks, setTasks] = useState({});
    const [view, setView] = useState(false);
    const addTask = (e) => {
        // const item = [e.target.value];
        setTasks({...tasks, [e.target.name] : [e.target.value]})
    }
    const viewTxt = (e) => {
        e.preventDefault()
        setView(true)
    }
    return (
        <div id="todo">
            <center>
                <input type='text' name='todos'  onChange={addTask} placeholder='Add' />
                <button type="submit" onClick={viewTxt}>Add</button>
            </center>
            {
                (view) ? 
                <ul>
                <li>Have to finish : {tasks?.map((el)=>el)} </li>
                </ul> :
                <> </>
            }
            
        </div>
    )
}