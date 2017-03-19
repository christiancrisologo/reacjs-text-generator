import React, { Component } from 'react';

class NumText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState(
            { value: e.target.value },
            () => {
                console.log("state change " + this.state.value);
                this.props.onChange(this.state.value);
            }
        );
    }

    render() {
        return (

            <input type="number" className="form-control"
                value={this.state.value}
                onChange={this.onChange.bind(this)} />


        )

    }
}

export default NumText;