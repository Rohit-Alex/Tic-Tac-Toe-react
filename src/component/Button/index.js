import React, { Component } from 'react';
import "./style.css"
class Button extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button className="game--restart" onClick={()=>{
                this.props.reset()}}>Restart Game</button>
        );
    }
}

export default Button;