import React from 'react';
import './css/square.css';
import flag from "./images/flag.png";

export default class Square extends React.Component {
    render() {

        if (!this.props.data['revealed']) {
            if (this.props.data['flagged']) {
                return this.flaggedButton();
            }
            return this.emptyButton();
        }
        return this.revealedButton();
    }


    emptyButton() {
        return (<button className="square" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                        onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>
            </button>
        );
    }

    flaggedButton() {
        return (<button className="flag" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                        onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>
                <img className="flag" src={flag} alt={""}/>
            </button>
        );
    }

    revealedButton() {
        return <button className="opened square" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                 onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>

                {this.props.data['number'] ? this.props.data['number'] : ' '}
            </button>;
    }
}