import React from 'react';
import BombsCounter from "./BombsCounter";
import TimeAndMovesCounter from "./TimeAndMovesCounter";
import "./css/counters.css"
import "./css/bombs-counter.css"
import "./css/time-counter.css"


export default class BoardHeader extends React.Component {
    render() {
        return (
            <div className="counters">
                <BombsCounter classname="bombs-counter" mines={this.props.mines}/>
                <TimeAndMovesCounter classname="time-counter" moves={this.props.moves}/>
            </div>
        );
    }
}