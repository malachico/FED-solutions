import React from 'react';
import timer from './images/timer.png'
import plays from './images/plays.png'
import './css/header.css'

export default class TimeAndMovesCounter extends React.Component {
    constructor(props) {
        super(props);

        this.switchDisplay = this.switchDisplay.bind(this);

        this.state = {
            timePassed: 0,
            currentDisplay: 1
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

    switchDisplay() {
        this.setState({currentDisplay: this.state.currentDisplay ^ 1});
    }

    render() {
        if (this.state.currentDisplay) {
            return (<button className='counter' onClick={() => this.switchDisplay()}>
                    <span>
                        <img className='header-icon' src={plays} alt=""/>
                        <span>{this.props.moves}</span>
                    </span>
                </button>
            );
        }
        return <button className='counter' onClick={() => this.switchDisplay()}>
            <span>
                <img className='header-icon' src={timer} alt=""/>
                <span>{this.state.timePassed}</span>
            </span>
        </button>
    }
}