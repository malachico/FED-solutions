import React from 'react';
import smiley from "./images/smiley.png";
import "./css/smiley.css"

export default class BoardHeader extends React.Component {
    render() {
        return (
            <button className="smiley-button" onClick={this.props.onStart}><img src={smiley} alt={""}/></button>
        );
    }
}