import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Board from "./Board";


class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Board width={10} height={10} mines={30}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
