import React from 'react';
import BombsCounter from "./BombsCounter";
import TimeAndMovesCounter from "./TimeAndMovesCounter";


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