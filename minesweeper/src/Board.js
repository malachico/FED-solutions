import React from 'react';
import BoardHeader from "./BoardHeader";


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            mines: props.mines,
        }
    }

    render() {
        return <BoardHeader mines={this.state.mines}/>;
    }
}
