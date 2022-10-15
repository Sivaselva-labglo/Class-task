import React, {Component} from "react";
import View from "./clsView";

export default class Task extends Component {
    constructor(props) {
        super(props)
        this.name = 'John David Washington'
        console.log('name is ', this.name);
    }
   render()  {
    
    return(
        <View name={this.name}/>
    )

   }
}