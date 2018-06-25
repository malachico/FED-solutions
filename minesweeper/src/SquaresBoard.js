import React from 'react';
import './css/board-header.css';
import './css/square.css';
import './css/squares-board.css';
import Square from "./Square";


export default class SquaresBoard extends React.Component {
    constructor(props) {
        super(props);
    }


    createTable = () => {
        let table = [];

        for (let i = 0; i < this.props.height; i++) {
            let children = [];
            for (let j = 0; j < this.props.width; j++) {
                children.push(<Square className="square" width={j} height={i}/>)
            }
            table.push(<tr>{children}</tr>)
        }
        return table
    };


    render() {
        return (
            <table className="squares-board">
                <tr>
                    {this.createTable()}
                </tr>
            </table>
        );
    }
}
