import React from 'react';


export default class BoardHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BombsCounter/>
                <TimeAndMovesCounter/>
            </div>
        );
    }
}