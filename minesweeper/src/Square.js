import React from 'react';
import './css/board-header.css';


export default class Square extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.handleClick(this.props.i, this.props.j)}>
                {this.props.value}
            </button>
        );

    }
}