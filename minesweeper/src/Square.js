import React from 'react';
import './css/board-header.css';


export default class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={(e) => this.props.handleClick(e, this.props.i)}
                    onContextMenu={(e) => this.props.handleClick(e, this.props.i)}>
                {this.props.value}
            </button>
        );

    }
}