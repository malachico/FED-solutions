import React from 'react';
import BoardHeader from "./BoardHeader";
import './css/board-header.css';
import SquaresBoard from "./SquaresBoard";
import Square from "./Square";


export default class Board extends React.Component {
    constructor(props) {
        super(props);

    }

    createTable = () => {
        let table = [];

        for (let i = 0; i < this.props.height; i++) {
            let children = [];
            for (let j = 0; j < this.props.width; j++) {
                children.push(<Square width={i} height={j} value={null} handleClick={this.handleClick}/>)
            }
            table.push(<tr>{children}</tr>)
        }
        return table
    };

    handleClick(i,j){
        console.log(i,j);
    }

    render() {
        return (
            <div className="board">
                <BoardHeader className="board-header" mines={this.props.mines}/>
                <SquaresBoard className="squares-board" width={this.props.width} height={this.props.height} createTable={this.createTable} handleClick={this.handleClick}/>
            </div>
        );
    }
}
