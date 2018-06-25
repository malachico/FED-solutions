import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./Board";



class Game extends React.Component{
    render(){
        return <Board width={10} height={10} mines={30}/>;
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
