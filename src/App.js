// import logo from './logo.svg';
import './App.css';

import {Component} from 'react'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: '',
      num2: '',
      result: '',
      allowAdd: false
    }
    this.setNum1 = this.setNum1.bind(this)
    this.setNum2 = this.setNum2.bind(this)
    // this.addNumbers = this.addNumbers.bind(this)
  }
  setNum1 (event) {
    this.setState({num1: event.target.value, allowAdd: true})
    if(this.state.num2) {
      console.log(this.state.num2)
      this.setState({allowAdd: false})
    }
  }
  setNum2 (event) {
    this.setState({num2: event.target.value, allowAdd: true})
    if(this.state.num1) {
      console.log(this.state.num1)
      this.setState({allowAdd: false})
    }
  }
  setResult (event) {

  }
  addNumbers() {
    let result;
    try {
      let num1 = parseInt(this.state.num1)
      let num2 = parseInt(this.state.num2)
      result = num1 + num2
    } catch (error) {
      console.log(error)
    }

    if (result) {
      this.setState({result: result.toString()})
    }
  }
  render() {
    return (
      <div className="App">
        <div className="form-control" >
          <label htmlFor="Text1">Enter First Number : </label>
          <input type="text" id="Text1" value={this.state.num1} onChange={this.setNum1}/>
        </div>
        <div className="form-control" >
          <label htmlFor="Text2">Enter Second Number : </label>
          <input type="text" id="Text2" value={this.state.num2} onChange={this.setNum2}/>
        </div>
        <div className="form-control" >
          <label htmlFor="Text1">Result : </label>
          <input type="text" id="txtresult" value={this.state.result} onChange={this.setResult} />
        </div>
        <div className="form-control" >
          <button className="clickbtn" name="clickbtn" onClick={() => {this.addNumbers(1,2)}} disabled={this.state.allowAdd}>Display</button>
        </div>
      </div>
    )
  }
}



export default App;
