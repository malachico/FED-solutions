import React from 'react';
import BombsCounter from "./BombsCounter";
import TimeAndMovesCounter from "./TimeAndMovesCounter";
import smiley from "./utils/smiley.png";


export default class BoardHeader extends React.Component {
    render() {
        return (
            <button onClick={this.props.startNewGame}><img src={smiley}/></button>
        );
    }
}