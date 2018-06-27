import React from 'react';
import './css/square.css';
import flag from "./utils/flag.jpg";

export default class Square extends React.Component {
    render() {

        if (!this.props.data['revealed']) {
            if (this.props.data['flagged']) {
                return (<button className="flag">
                        <img src={flag} onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                             onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}/>
                    </button>
                );
            }
            return (<button className="square" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                            onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>
                    {this.props.data['number']}
                </button>
            );
        }

        if (this.props.data['bomb']) {
            return (
                <button className="opened square" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                        onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>
                    {"b"}
                </button>
            );
        }
        return (<button className="opened square" onClick={(e) => this.props.handleClick(e, this.props.i, this.props.j)}
                        onContextMenu={(e) => this.props.handleClick(e, this.props.i, this.props.j)}>
                {this.props.data['number']}
            </button>
        );
    }
}