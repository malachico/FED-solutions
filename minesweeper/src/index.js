import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
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

        let width = utils.DEFAULT_WIDTH;
        let height = utils.DEFAULT_HEIGHT;
        let mines = utils.DEFAULT_MINES;

        this.handleClick = this.handleClick.bind(this);
        this.switchDisplay = this.switchDisplay.bind(this);
        this.setParams = this.setParams.bind(this);
        this.initNewGame = this.initNewGame.bind(this);
        this.incrementTime = this.incrementTime.bind(this);

        this.state = {
            timePassed: 0,
            currentDisplay: utils.MOVES_COUNTER,
            started: false,
            win: 0,
            moves: 0,
            flags: 0,
            height: height,
            width: width,
            mines: mines,
            squares: utils.createSquaresArray(height, width)
        }
    }

    incrementTime() {
        this.setState({timePassed: this.state.timePassed + 1});
    }


initNewGame(height, width, mines) {
        if (!height || !width || !mines) {
            height = this.state.height;
            width = this.state.width;
            mines = this.state.mines;
        }


        this.setState({
            timePassed: 0,
            currentDisplay: utils.MOVES_COUNTER,
            started: false,
            win: 0,
            moves: 0,
            flags: 0,
            height: height,
            width: width,
            mines: mines,
            squares: utils.createSquaresArray(height, width)
        });
    }


    switchDisplay() {
        this.setState({currentDisplay: this.state.currentDisplay ^ 1});
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
    }

    handleFirstClick(i, j, squares) {
        this.setState({started: true});
        utils.putMines(i, j, squares, this.state.mines);
        utils.putNumbers(squares);
    }


    setParams(mines, height, width) {
        this.initNewGame(height, width, mines);
    }

    render() {
        if (this.state.win === utils.LOST) {
            return this.renderLost();
        }
        if (this.state.win === utils.WIN) {
            return this.renderWin();
        }
        return (this.renderGame());
    }


    renderGame() {
        return <div className="board">
            {this.renderHeader()}
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
            {this.renderFooter()}
        </div>;
    }

    renderWin() {
        return (
            <div className="board">
                {this.renderHeader()}
                <img className="boom" src={win} alt=""/>
                {this.renderFooter()}
            </div>
        );
    }

    renderLost() {
        return (
            <div className="board">
                {this.renderHeader()}
                <img className="boom" src={boom} alt=""/>
                {this.renderFooter()}
            </div>
        );
    }

    renderHeader() {
        return <Header mines={this.state.mines} moves={this.state.moves} currentDisplay={this.state.currentDisplay}
                       switchDisplay={this.switchDisplay} flags={this.state.flags} started={this.state.started}
                       initNewGame={this.initNewGame} timePassed={this.state.timePassed} incrementTime={this.incrementTime}/>;
    }

    renderFooter() {
        return (<Footer setParams={this.setParams}/>);
    }

}


ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
