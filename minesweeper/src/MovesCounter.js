import './css/header.css'
import React from 'react';
import plays from './images/plays.png'


export default class MovesCounter extends React.Component {
    render() {
        return (<button className='counter' onClick={() => this.props.switchDisplay()}>
                    <span>
                        <img className='header-icon' src={plays} alt=""/>
                        <span>{this.props.moves}</span>
                    </span>
        </button>);
    }
}