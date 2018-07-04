import React from 'react';
import timer from './images/timer.png'
import './css/header.css'

export default class TimeCounter extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.props.started) {
            this.props.incrementTime();
        }
    }


    render() {
        return <button className='counter' onClick={() => this.props.switchDisplay()}>
            <span>
                <img className='header-icon' src={timer} alt=""/>
                <span>{this.props.timePassed}</span>
            </span>
        </button>
    }


}