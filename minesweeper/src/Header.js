import React from 'react';
import BombsCounter from "./BombsCounter";
import TimeAndMovesCounter from "./TimeAndMovesCounter";
import Smiley from "./Smiley";
import "./css/counters.css"
import "./css/bombs-counter.css"
import "./css/time-counter.css"


export default class Header extends React.Component {
    render() {
        return (
            <div className="counters">
                <BombsCounter classname="bombs-counter" mines={this.props.mines} flags={this.props.flags}/>
                <Smiley startNewGame={this.props.startNewGame}/>
                <TimeAndMovesCounter classname="time-counter" moves={this.props.moves} started={this.props.started}/>
            </div>
        );
    }
}