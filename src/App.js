import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      hasil:0,
      angka1:0,
      angka2:0,
      operator:""
    };
  }

  changeHandler = (event) => {
    let value = event.target.value
    this.setState({[event.target.name]:value})
  }
// parseInt= digunakan untuk mengconvert string contoh: tanpa parseInt 1+1=11 dengan parseInt 1+1=2
  submitHandler = () => {
    let angka1 = parseInt(this.state.angka1)
    let angka2 = parseInt(this.state.angka2)
    let operator = this.state.operator
    let hasil= 0
    if(operator==="+"){
      hasil=angka1 + angka2
    }else if(operator==="-"){
      hasil=angka1 - angka2
    }else if(operator==="*"){
      hasil=angka1 * angka2
    }
    this.setState({
      hasil,

      submit:!this.state.submit
    })
  }

  backHandler = () => {
    this.setState({
      submit:!this.state.submit
    })
  }

  render() {
    return (
      <div>
        <center>
          {!this.state.submit ? (
            <div>
              <input type="number" name="angka1" placeholder="Angka 1" onChange={this.changeHandler}/>
              <br/><br/>

              <select name="operator">
                <option value="">=Pilih Operator=</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
              </select>
              <br/><br/>

              <input type="number" name="angka2" placeholder="Angka 2"  onChange={this.changeHandler}/>
              <br/><br/>
              
              <input type="submit" onClick={() => this.submitHandler()} value="Hasil"/>
            </div>
          ):(
            <div>
              <h1>Hasil {this.state.angka1} {this.state.operator} {this.state.angka2} adalah {this.state.hasil} </h1> 
              <button onClick={() => this.backHandler()}>Back To Home</button>
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default App;