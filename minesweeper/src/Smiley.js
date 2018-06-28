import React from 'react';
import smiley from "./utils/smiley.png";
import "./css/smiley.css"

export default class BoardHeader extends React.Component {
    render() {
        return (
            <button className="smiley-button" onClick={this.props.startNewGame}><img src={smiley} alt={""}/></button>
        );
    }
}