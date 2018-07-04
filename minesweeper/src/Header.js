import React from 'react';
import "./css/header.css"
import * as utils from "./utils";
import plays from './images/plays.png'
import timer from './images/timer.png'
import bomb from "./images/bomb.png"
import smiley from "./images/smiley.png";


export default class Header extends React.Component {

    render() {
        let counter;

        if (this.props.currentDisplay === utils.MOVES_COUNTER) {
            counter = this.movesCounter();
        }
        if (this.props.currentDisplay === utils.TIME_COUNTER) {
            counter = this.timeCounter();
        }

        return (
            <div className="counters">
                {this.bombsCounter()}
                {this.smiley()}
                {counter}
            </div>
        );

    }

    bombsCounter = () => {
        return (
            <span className="counter">
                <span>{this.props.mines - this.props.flags}</span>
                <img className="header-icon" src={bomb} alt={""}/>
            </span>

        );
    };

    movesCounter = () => {
        return (<button className='counter' onClick={() => this.props.switchDisplay()}>
                    <span>
                        <img className='header-icon' src={plays} alt=""/>
                        <span>{this.props.moves}</span>
                    </span>
        </button>);
    };

    timeCounter = () => {
        return <button className='counter' onClick={() => this.props.switchDisplay()}>
            <span>
                <img className='header-icon' src={timer} alt=""/>
                <span>{this.props.timePassed}</span>
            </span>
        </button>
    };

    smiley = () => {
        return (
            <button className="smiley-button" onClick={this.props.initNewGame}><img src={smiley} alt={""}/></button>
        );
    }
}