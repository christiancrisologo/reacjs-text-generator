import React, { Component } from 'react';

class Select extends Component {
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

            <select className="form-control" onChange={this.onChange.bind(this)} >
                <option value="hispter-latin">Latin</option>
                <option value="hispter-centric">Centric</option>
            </select>

        )

    }
}

export default Select;