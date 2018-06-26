import React from 'react';


export default class BombsCounter extends React.Component {
    render() {
        return <h2>{this.props.mines}</h2>
    }
}