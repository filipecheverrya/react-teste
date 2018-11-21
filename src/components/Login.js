import React, { Component } from 'react';
import Axios from 'axios';
// import './App.css';
// const cadastro = 'http://api-navetest.herokuapp.com/v1/users/signup'
// const cadastro = 'http://api-navetest.herokuapp.com/v1/users?ranking=true'
const login_URL = 'http://api-navetest.herokuapp.com/v1/users/login'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  compareInformation(e) {
    e.preventDefault();
    const form = {
      email: this.email.value,
      password: this.pass.value
    }
    console.log(form);
    
    Axios.post(login_URL, form)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  
  render() {
    return (
        <section className="container-default">
            <h1>Login</h1>
            <div className="row">
                <label>Email:</label>
                <input type="email" className="field" ref={(email) => this.email = email} />
            </div>
            <div className="row">
                <label>Password:</label>
                <input type="password" className="field" ref={(pass) => this.pass = pass} />
            </div>
            <div className="row">
                <button typ="button" className="button" onClick={(e) => this.compareInformation(e) }>
                  Confirm
                </button>
            </div>
        </section>
    );
  }
}

export default Login;
