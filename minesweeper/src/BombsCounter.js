import React from 'react';
import "./css/header.css"
import bomb from "./images/bomb.png"

export default class BombsCounter extends React.Component {
    render() {
        return (
            <span className="counter">
                <span>{this.props.mines - this.props.flags}</span>
                <img className="header-icon" src={bomb} alt={""}/>
            </span>

        );
    }
}
