import React from 'react';
import Header from "./Header";
import './css/header.css';
import './css/board.css';
import Square from "./Square";
import boom from "./images/boom.png"
import win from "./images/win.gif"
import ReactDOM from 'react-dom';
import * as utils from "./utils.js"


class Game extends React.Component {
    constructor(props) {
        super(props);

        let width = 30;
        let height = 30;
        let mines = 15;

        this.onStart(height, width);
        this.handleClick = this.handleClick.bind(this);
        this.onStart = this.onStart.bind(this);

        this.state = this.onStart(height, width, mines);

    }

    onStart(height, width, mines) {
        return {
            started: false,
            win: 0,
            moves: 0,
            flags: 0,
            height: height,
            width: width,
            mines: mines,
            squares: utils.createSquaresArray(height, width)
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
        let squares = this.state.squares.slice();

        if (!this.state.started) {
            this.handleFirstClick(i, j, squares);
        }

        if (this.state.squares[i][j].revealed || this.state.win !== 0) {
            return;
        }

        if (e.type === utils.RIGHT_CLICK) {
            return this.handleRightClick(squares, i, j);
        }

        squares[i][j]['revealed'] = true;

        if (squares[i][j]['bomb']) {
            this.setState({win: -1, started: false});
            return;
        }

        if (squares[i][j]['number'] === 0) {
            utils.openRecursively(squares, i, j);
        }

        this.setState({
            squares: squares,
            moves: this.state.moves + 1
        });

        if (utils.checkIfWin(squares)) {
            this.setState({win: 1, started: false});
        }
    }

    handleRightClick(squares, i, j) {
        squares[i][j]['flagged'] = !squares[i][j]['flagged'];

        this.setState({
            squares: squares,
            flags: utils.countFlags(this.state.squares)
        });

        return;
    }

    handleFirstClick(i, j, squares) {
        this.setState({started: true});
        utils.putMines(i, j, squares, this.state.mines);
        utils.putNumbers(squares);
    }

    render() {
        if (this.state.win === utils.LOST) {
            return this.renderLost();
        }
        if (this.state.win === utils.WIN) {
            return this.renderWin();
        }
        return (
            this.renderGame()
        );
    }


    renderGame() {
        return <div className="board">
            <Header mines={this.state.mines} moves={this.state.moves}
                    flags={this.state.flags} started={this.state.started} onStart={this.onStart}/>
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
        </div>;
    }

    renderWin() {
        return (
            <div className="board">
                <Header mines={this.state.mines} moves={this.state.moves}
                        flags={this.state.flags} started={this.state.started} onStart={this.onStart}/>

                <img className="boom" src={win} alt=""/>
            </div>
        );
    }

    renderLost() {
        return (
            <div className="board">
                <Header mines={this.state.mines} moves={this.state.moves}
                        flags={this.state.flags} started={this.state.started} onStart={this.onStart}/>

                <img className="boom" src={boom} alt=""/>
            </div>
        );
    }
}


ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
