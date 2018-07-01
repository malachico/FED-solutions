import React from 'react';
import BombsCounter from "./BombsCounter";
import TimeCounter from "./TimeCounter";
import MovesCounter from "./MovesCounter";
import Smiley from "./Smiley";
import "./css/header.css"
import * as utils from "./utils";


export default class Header extends React.Component {

    render() {

        console.log("display : " + this.props.currentDisplay);
        console.log("tc : " + utils.TIME_COUNTER);
        console.log("mc : " + utils.MOVES_COUNTER);

        if (this.props.currentDisplay === utils.MOVES_COUNTER) {
            return this.renderMoves();
        }
        if (this.props.currentDisplay === utils.TIME_COUNTER) {
            return this.renderTime();
        }
    }


    renderTime() {
        return (
            <div className="counters">
                <BombsCounter mines={this.props.mines} flags={this.props.flags}/>
                <Smiley onStart={this.props.onStart}/>
                <TimeCounter className="counter" switchDisplay={this.props.switchDisplay} started={this.props.started}/>
            </div>
        );
    }

    renderMoves() {
        return (
            <div className="counters">
                <BombsCounter mines={this.props.mines} flags={this.props.flags}/>
                <Smiley onStart={this.props.onStart}/>
                <MovesCounter className="counter" switchDisplay={this.props.switchDisplay} moves={this.props.moves}/>
            </div>
        );
    }
}