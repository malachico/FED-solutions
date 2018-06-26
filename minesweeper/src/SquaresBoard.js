import React from 'react';
import './css/board-header.css';
import './css/square.css';
import './css/squares-board.css';
import Square from "./Square";


export default class SquaresBoard extends React.Component {
    constructor(props) {
        super(props);
    }





    render() {
        return (
            <table className="squares-board">
                <tr>
                    {this.props.createTable()}
                </tr>
            </table>
        );
    }
}
