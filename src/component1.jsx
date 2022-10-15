import React, {createContext} from "react";
import Component2 from "./component2";
export const name = createContext();
const Component1 = () =>{
    const peyar = 'Thomas Shelby'
    return(
        <div>
            <name.Provider value={peyar}>
                <Component2 />
            </name.Provider>
        </div>
    )
}
export default Component1