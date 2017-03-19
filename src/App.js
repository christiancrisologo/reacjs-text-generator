import React, { Component } from 'react';
import axios from 'axios';
import Output from './Components/Output';
import Select from './Components/Select';
import SliderOffOn from './Components/SliderOffOn';
import NumText from './Components/NumText';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      type: 'hipster-latin', // hipster-centric
      text: ''
    }
  }

  componentWillMount() {
    this.generateText();
  }

  generateText() {
    axios.get(`http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}&type=${this.state.type}`)
      .then((resp => {
        this.setState({
          text: resp.data.text
        },
          (res) => {
            console.log(this.state);
          });

      }))
      .catch(
      (err) => {
        console.log(err);
      }
      );
  }

  // change paragraphs
  changeParas(value) {
    this.setState({
      paras: value
    }, () => {
      this.generateText();
    }
    )
  }

  // change language type
  changeType(value) {
    this.setState({
      type: value
    }, () => {
      this.generateText();
    }
    )
  }

  // switch to html
  switchHTML(value) {    
    this.setState({
      html: value
    }, () => {
      this.generateText();
    }
    )
  }

  render() {
    return (
      <div className="container">

        <div className="page-header">
          <h1>Text Generator</h1>
        </div>


        <div >
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="">Include HTML:</label>
               <SliderOffOn value={this.state.html} onChange={this.switchHTML.bind(this)}  />
            </div>
            <div className="form-group">
              <label htmlFor="">Number of Paragraphs:</label>
              <NumText value={this.state.paras} onChange={this.changeParas.bind(this)} />                
            </div>
            <div className="form-group">
              <label htmlFor="">Language Type:</label>
               <Select value={this.state.type} onChange={this.changeType.bind(this)}  />
            </div>
          </form>
          <hr />
          <Output value={this.state.text}  />

        </div>
      </div>

    );
  }
}

export default App;
