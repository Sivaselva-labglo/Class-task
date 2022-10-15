import React, { Component } from "react";

export default class Democlass extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Aasad',
            age: 21
        }
        console.log('stateName ', this.state.name)
    }

    changestate = (e)=>{
        this.setState({name : e.target.value})
        
    }
    
    render() {
        console.log('stateName ', this.state.name)
        return (
            <div>
                <h1>Class Component Example</h1>
                <h4>
                    <input type='text' name='name' value={this.state.name} onChange={this.changestate}/>
                </h4>
                <h3>Name : {this.state.name} Age : {this.state.age}</h3>
            </div>
        )
    }
}
