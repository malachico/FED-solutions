import React from 'react';
import './css/board-header.css';


export default class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                    onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>
                {this.props.data['flagged'] ? 'f' : ' '}

            </button>
        );

    }
}