import React from 'react';
import './css/board-header.css';


export default class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <span className="square">{this.props.width},{this.props.height}    </span>
    }
}