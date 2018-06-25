import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Board extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            width: props.width,
            height: props.height,
            mines: props.mines,
        }
    }


    render() {

    }
}