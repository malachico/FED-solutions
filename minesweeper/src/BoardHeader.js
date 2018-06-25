import React from 'react';
import BombsCounter from "./BombsCounter";
import TimeAndMovesCounter from "./TimeAndMovesCounter";
import "./css/counters.css"
import "./css/bombs-counter.css"
import "./css/time-counter.css"


export default class BoardHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="counters">
                <BombsCounter classname="bombs-counter"/>
                <TimeAndMovesCounter classname="time-counter"/>
            </div>
        );
    }
}