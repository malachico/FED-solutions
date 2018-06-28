import React from 'react';
import "./css/bombs-counter.css"

export default class BombsCounter extends React.Component {
    render() {
        return <span className="bombs-counter">{this.props.mines - this.props.flags}</span>
    }
}
