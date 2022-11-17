import React, {createContext} from "react";
import Component2 from "./component2";

export const Items = createContext()

const Contexts = () => {
    const mbls = [{
        brand : 'Nokia',
        cost : 6600
    },
    {
        brand : 'Vivo',
        cost : 12000
    }]

    return(
        <div>
            <Items.Provider value={mbls}>
                <Component2/>
            </Items.Provider>
        </div>
    )
}
export default Contexts;