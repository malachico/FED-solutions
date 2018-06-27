import React from 'react';


export default class BombsCounter extends React.Component {
    render() {
        return <h2>{this.props.mines - this.props.flags}</h2>
    }
}
