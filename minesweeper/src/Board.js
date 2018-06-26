import React from 'react';
import BoardHeader from "./BoardHeader";
import './css/board-header.css';
import SquaresBoard from "./SquaresBoard";
import Square from "./Square";


export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            squares: this.createTable()
        }
    }


    createTable = () => {
        let table = [];

        for (let i = 0; i < this.props.height; i++) {
            let children = [];
            for (let j = 0; j < this.props.width; j++) {
                // Push new cell
                children.push(<Square width={i} height={j} value={null} handleClick={this.handleClick}/>)
            }
            // Push new row
            table.push(<tr>{children}</tr>)
        }
        return table
    };

    handleClick(i,j){
        //todo: add logic
        console.log(i,j);
    }

    render() {
        return (
            <div className="board">
                <BoardHeader className="board-header" mines={this.props.mines}/>
                <SquaresBoard className="squares-board" width={this.props.width} height={this.props.height} squares={this.state.squares} handleClick={this.handleClick}/>
            </div>
        );
    }

    //
    // handleClick(i) {
    //     if (this.state.squares[i] !== null) {
    //         return;
    //     }
    //
    //     const squares = this.state.squares.slice();
    //
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }
    //
    //     squares[i] = this.getCurrentPlayer();
    //
    //     this.xIsNext = !this.xIsNext;
    //
    //     this.setState({
    //         squares: squares,
    //     });
    //
    // }

}
