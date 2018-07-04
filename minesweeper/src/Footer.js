import React from 'react';
import "./css/footer.css"


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minesInputValue: '',
            heightInputValue: '',
            widthInputValue: ''
        };
    }
    render() {
        return (
            <div className="footer">
                <input className="input-field" value={this.state.minesInputValue} onChange={e => this.updateMinesInputValue(e)} placeholder={"mines"}/>
                <input className="input-field" value={this.state.heightInputValue} onChange={e => this.updateHeightInputValue(e)} placeholder={"height"}/>
                <input className="input-field" value={this.state.widthInputValue} onChange={e => this.updateWidthInputValue(e)} placeholder={"width"}/>
                <button className="init-button"
                    onClick={() => this.props.setParams(this.state.minesInputValue, this.state.heightInputValue, this.state.widthInputValue)}>init game
                </button>

            </div>
        );

    }


    updateMinesInputValue(e) {
        this.setState({
            minesInputValue: e.target.value
        });
    }
    updateHeightInputValue(e) {
        this.setState({
            heightInputValue: e.target.value
        });
    }
    updateWidthInputValue(e) {
        this.setState({
            widthInputValue: e.target.value
        });
    }
}