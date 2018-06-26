import React from 'react';


export default class TimeAndMovesCounter extends React.Component {
    constructor(props) {
        super(props);

        this.switchDisplay = this.switchDisplay.bind(this);

        this.state = {
            timePassed: 0,
            current: 1
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({timePassed: this.state.timePassed + 1});
    }

    switchDisplay() {
        this.setState({current: this.state.current ^ 1});
    }

    render() {
        if (this.state.current) {
            return <button onClick={() => this.switchDisplay()}>{this.props.moves}</button>
        }
        return <button onClick={() => this.switchDisplay()}>
            <span>{this.state.timePassed}</span>
        </button>
    }
}