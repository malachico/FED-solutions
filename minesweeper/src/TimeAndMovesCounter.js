import React from 'react';


export default class TimeAndMovesCounter extends React.Component {
    constructor(props) {
        super(props);

        this.switchDisplay = this.switchDisplay.bind(this);

        this.state = {
            startTime: new Date().getSeconds(),
            current: 1
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    switchDisplay(){
        this.setState({current: this.state.current ^ 1});
    }


    render() {
        if (this.state.current){
            return <button onClick={()=>this.switchDisplay()}>{this.props.moves}</button>
        }else{
            return <button onClick={()=>this.switchDisplay()}>
                <span>{new Date().getSeconds() - this.state.startTime}</span>
            </button>

        }

    }
}