import React, {Component} from "react";

export default class View extends Component {
    constructor(props) {
        super(props)
        this.st = this.props.name
        this.state = {
            show : false
        }
        this.changeState = this.changeState.bind(this)
        console.log('name is ', this.props.name);
    }

    changeState() {
        this.setState({show : !this.state.show})
    }

   render()  {
    return(
        
        (this.state.show)
        ?  <p>Name : {this.st} <br/> <button onClick={this.changeState}>Hide</button> </p> 
        : <button onClick={this.changeState}>Show</button>
       
    )

   }
}