import React from 'react';
import Header from "./BoardHeader";
import './css/board-header.css';
import Square from "./Square";
import ReactDOM from 'react-dom';


class Game extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            started: false,
            win: 0,
            moves: 0,
            flags: 0,
            height: 10,
            width: 10,
            mines: 30,
            squares: this.createTwoDimArray()
        };
    }

    renderSquare(i, j) {
        return (
            <Square
                i={i}
                j={j}
                data={this.state.squares[i][j]}
                handleClick={this.handleClick}
            />
        );
    }


    handleClick(e, i, j) {
        if (!this.state.started) {
            this.setState({started: true});
        }

        let clicked = this.state.squares[i][j];
        // if is revealed - return
        if (clicked.revealed) {
            return;
        }

        // if right click - flag / unflag
        if (e.type === 'contextmenu') {
            let squares = this.state.squares.slice();
            squares[i][j]['flagged'] = !squares[i][j]['flagged'];
            this.setState({squares: squares});
            return;
        }

        // if left click

    }

    createTwoDimArray() {
        let result = [];
        for (let i = 0; i < 10; i++) {
            let subArray = [];
            for (let j = 0; j < 10; j++) {
                let item = {
                    revealed: false,
                    flagged: false,
                    bomb: false,
                    number: 0
                };
                subArray.push(item);
            }
            result.push(subArray);
        }
        return result;
    }

    render() {
        return (
            <div className="board">
                <Header className="board-header" mines={this.state.mines} moves={this.state.moves}
                        flags={this.state.flags} started={this.state.started}/>
                <table className="squares-board">
                    <tbody>
                    {this.state.squares.map((row, i) =>
                        <tr key={i}>
                            {row.map((col, j) =>
                                <td key={j}>{this.renderSquare(i, j)}</td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }


}


ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
