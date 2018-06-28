import React from 'react';


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
        if(this.props.started) {
            this.setState({timePassed: this.state.timePassed + 1});
        }else {
            this.setState({timePassed: 0});
        }
    }

    switchDisplay() {
        this.setState({currentDisplay: this.state.currentDisplay ^ 1});
    }

    render() {
        if (this.state.currentDisplay) {
            return <button onClick={() => this.switchDisplay()}>{this.props.moves}</button>
        }
        return <button onClick={() => this.switchDisplay()}>
            <span>{this.state.timePassed}</span>
        </button>
    }
}