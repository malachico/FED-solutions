import React from 'react';
import './css/board-header.css';


export default class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                    onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>
                {this.putIcon(this.props.data)}


            </button>
        );

    }

    putIcon(data) {
        if(data['number']){
            return data['number'];
        }
        if (data['flagged']) {
            return 'f';
        }
        if (!data['revealed']) {
            return ' ';
        }
        if(data['bomb']){
            return 'b';
        }

    }
}