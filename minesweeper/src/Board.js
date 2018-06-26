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

    createTable = () => {
        let table = [];

        for (let i = 0; i < this.props.height; i++) {
            let children = [];
            for (let j = 0; j < this.props.width; j++) {
                let squareProps = {
                    i: i,
                    j: j,
                    isRevealed: false,
                    isBomb: false,
                    number: 0,
                    isFlagged: false,
                    handleClick: this.handleClick
                };

                // Push new cell
                children.push(<Square {...squareProps}/>);
            }
            // Push new row
            table.push(<tr>{children}</tr>)
        }
        return table
    };

    handleClick(i, j) {
        // update moves
        this.setState({moves: this.state.moves + 1});
        // if revealed : return
        // if right click return flag / un flag
        // if bomb : return exploded
        // if number - return number

        let clicked = this.state.squares[i].props.children[j];
        // console.log(clicked.props);
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
