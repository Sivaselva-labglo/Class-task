import React, {useContext, useState} from "react";
import { name } from "./component1";

const Component4 = ()=>{
    const names = useContext(name)
    const [state,setState] = useState({name : names})
    function vest(e) {
        setState({...state, [e.target.name] : e.target.value})
    }
    return(
        <div>
            <h1> Hi {names}</h1>
            <h3> howdy {state.name}</h3>

            <form>
                <label>Name </label>
                <input type='text' name="name" value={state.name} onChange={vest}/>
            </form>
        </div>
    )
}
export default Component4