import React from 'react';
import BoardHeader from "./BoardHeader";
import './css/board-header.css';
import SquaresBoard from "./SquaresBoard";
import Square from "./Square";


export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            moves: 0,
            squares: this.createTable()
        };
    }

    renderSquare(i) {
        return (
            <Square
                value={i}
                handleClick={this.handleClick}
            />
        );
    }

    createTable = () => {
        let table = [];
        for (let i = 0; i < this.props.height; i++) {
            let children = [];
            for (let j = 0; j < this.props.width; j++) {
                // Push new cell
                children.push(this.renderSquare(i * this.props.width + j));
            }
            // Push new row
            table.push(<tr>{children}</tr>)
        }
        return table
    };

    handleClick(e, i) {

    }

    render() {
        return (
            <div className="board">
                <BoardHeader className="board-header" mines={this.props.mines} moves={this.state.moves}/>
                <SquaresBoard className="squares-board" width={this.props.width} height={this.props.height}
                              squares={this.state.squares} handleClick={this.handleClick}/>
            </div>
        );
    }
}
