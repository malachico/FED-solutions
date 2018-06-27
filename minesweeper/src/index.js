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
            mines: 2,
            squares: this.createSquaresArray()
        };
    }

    createSquaresArray() {
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

    getRandInRange(max) {
        return Math.floor(Math.random() * (max));
    }

    handleClick(e, i, j) {
        if (!this.state.started) {
            this.setState({started: true});

            let squares = this.state.squares.slice();

            this.putMines(i, j, squares);

            this.putNumbers(squares);

        }

        // if is revealed or finished game - return
        if (this.state.squares[i][j].revealed || this.state.win !== 0) {
            return;
        }

        let squares = this.state.squares.slice();

        // if right click - flag / unflag
        if (e.type === 'contextmenu') {
            squares[i][j]['flagged'] = !squares[i][j]['flagged'];
            this.setState({squares: squares});
            return;
        }

        squares[i][j]['revealed'] = true;

        // if bomb - boom
        if (squares[i][j]['bomb']) {
            this.setState({win: -1});
            return;
        }

        // if left click - reveal
        if (squares[i][j]['number'] === 0) {
            this.openRecursively(squares, i, j);
        }

        this.setState({
            squares: squares,
        });
    }

    putMines(i, j, squares) {
        for (let k = 0; k < this.state.mines; k++) {
            let first = this.getRandInRange(this.state.width);
            let second = this.getRandInRange(this.state.height);
            if (i === first && j === second) {
                k += 1;
                continue;
            }
            if (squares[first][second]['bomb']) {
                k += 1;
                continue;
            }

            squares[first][second]['bomb'] = true;
        }
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


    putNumbers(squares) {
        for (let i = 0; i < squares.length; i++) {
            for (let j = 0; j < squares[0].length; j++) {
                if (squares[i][j]['bomb']) {
                    continue;
                }
                let counter = 0;

                for (let k = -1; k < 2; k++) {
                    for (let l = -1; l < 2; l++) {

                        let left = i + k;
                        let right = j + l;
                        if (k === 0 && l === 0) {
                            continue;
                        }
                        if (left < 0 || right < 0) {
                            continue;
                        }
                        if (left >= squares.length || right >= squares[0].length) {
                            continue;
                        }
                        if (squares[left][right]['bomb']) {
                            counter++;
                        }
                    }
                }
                squares[i][j]['number'] = counter;
            }
        }
    }

    openRecursively(squares, i, j) {
        for (let k = -1; k < 2; k++) {
            for (let l = -1; l < 2; l++) {

                let left = i + k;
                let right = j + l;

                if (left < 0 || right < 0) {
                    continue;
                }
                if (left >= squares.length || right >= squares[0].length) {
                    continue;
                }

                if(!squares[left][right]['revealed']) {
                    squares[left][right]['revealed'] = true;

                    if (squares[left][right]['number'] === 0) {
                        this.openRecursively(squares, left, right);
                    }
                }

            }
        }
    }
}


ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
