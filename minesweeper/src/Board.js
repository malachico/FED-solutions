import React from 'react';
import BoardHeader from "./BoardHeader";


export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <BoardHeader classname="board-header"/>;
    }
}
