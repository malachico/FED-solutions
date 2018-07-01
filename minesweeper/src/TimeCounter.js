import React from 'react';
import timer from './images/timer.png'
import './css/header.css'

export default class TimeCounter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            timePassed: 0
        };

    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.props.started) {
            this.setState({timePassed: this.state.timePassed + 1});
        }
    }


    render() {
        return <button className='counter' onClick={() => this.props.switchDisplay()}>
            <span>
                <img className='header-icon' src={timer} alt=""/>
                <span>{this.state.timePassed}</span>
            </span>
        </button>
    }


}