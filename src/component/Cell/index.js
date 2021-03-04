import React, { Component } from 'react';
import './style.css'
class Cell extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div className="cell" onClick={()=>{ 
            this.props.handleClick(this.props.rowIndex, this.props.colIndex)}}>{this.props.colText}</div>
    }
} 

export default Cell; 