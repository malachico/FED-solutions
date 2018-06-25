import React from 'react';
import BoardHeader from "./BoardHeader";
import './css/board-header.css';
import SquaresBoard from "./SquaresBoard";


export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board">
                <BoardHeader className="board-header" mines={this.props.mines}/>
                <SquaresBoard className="squares-board" width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}
