import React from 'react';
import './css/board-header.css';
import './css/square.css';
import './css/squares-board.css';


export default class SquaresBoard extends React.Component {

    render() {
        return (
            <table className="squares-board">
                <tr>
                    {this.props.squares}
                </tr>
            </table>
        );
    }
}
