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

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.started) {
            this.setState({timePassed: this.state.timePassed + 1});
        }
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
        height = Number(height);
        width = Number(width);
        mines = Number(mines);

        if (utils.validateParameters(mines, height, width) === false) {
            alert("invalid parameters");
            return;
        }

        this.initNewGame(height, width, mines);
    }

    render() {
        let body;

        if (this.state.win === utils.LOST) {
            body = this.renderLost();
        }
        else if (this.state.win === utils.WIN) {
            body = this.renderWin();
        }
        else {
            body = this.renderGame();
        }

        return <div className="board">
            {this.renderHeader()}
            {body}
            {this.renderFooter()}
        </div>;
    }

    renderGame = () => {
        return <table className="squares-board">
            <tbody>
            {this.state.squares.map((row, i) =>
                <tr key={i}>
                    {row.map((col, j) =>
                        <td key={j}>{this.renderSquare(i, j)}</td>
                    )}
                </tr>
            )}
            </tbody>
        </table>;
    };

    renderWin = () => {
        return <img className="boom" src={win} alt=""/>;
    };

    renderLost = () => {
        return <img className="boom" src={boom} alt=""/>;
    };

    renderHeader = () => {
        return <Header mines={this.state.mines} moves={this.state.moves} currentDisplay={this.state.currentDisplay}
                       switchDisplay={this.switchDisplay} flags={this.state.flags}
                       initNewGame={this.initNewGame} timePassed={this.state.timePassed}
        />;
    };

    renderFooter = () => {
        return (<Footer setParams={this.setParams}/>);
    }
}


ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
