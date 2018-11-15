import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const form = {
      name: this.state.name.value,
      password: this.state.password.value
    }
    console.log(form);
  }
  
  render() {
    return (
      <section className="container-login">
        <h1>Login</h1>
        <div className="row">
          <label>Username:</label>
          <input type="text" className="field" ref={(e) => this.state.name = e} />
        </div>
        <div className="row">
          <label>Password:</label>
          <input type="password" className="field" ref={(e) => this.state.password = e} />
        </div>
        <div className="row">
          <button typ="button" className="button" onClick={ (e) => this.onSubmit(e) }>Confirm</button>
        </div>
      </section>
    );
  }
}

export default App;
