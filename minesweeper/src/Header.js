import React from 'react';
import BombsCounter from "./BombsCounter";
import TimeAndMovesCounter from "./TimeAndMovesCounter";
import Smiley from "./Smiley";
import "./css/header.css"


export default class Header extends React.Component {
    render() {
        return (
            <div className="counters">
                <BombsCounter mines={this.props.mines} flags={this.props.flags}/>
                <Smiley onStart={this.props.onStart}/>
                <TimeAndMovesCounter className="counter" moves={this.props.moves} started={this.props.started}/>
            </div>
        );
    }
}