import React, { Component } from 'react';

class SliderOffOn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    }

    toggleChange(e) {
        this.setState(
            { isChecked: !this.state.isChecked  },
            () => {
                console.log("state change " + this.state.isChecked);
                this.props.onChange(this.state.isChecked);
            }
        );

  }

    render() {
        return (

            <div className="toggle-slide-button" >
                <span className="switch-text" >  </span>
                <label className="switch-button" >
                    <input type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.toggleChange.bind(this)} />
                    <div className="slider round">   </div>
                </label>
            </div>

        )

    }
}

export default SliderOffOn;


