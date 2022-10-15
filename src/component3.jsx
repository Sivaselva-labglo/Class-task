import React, {useContext} from "react";
import Component4 from "./componenet4";
import { name } from "./component1";


const Component3 = ()=>{
    const hey = useContext(name)
    return(
        <div>
            <h4><li>welcome {hey}</li></h4>
            <Component4/>
        </div>
    )
}
export default Component3