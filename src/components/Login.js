import React, { Component } from 'react';
import Axios from 'axios';
// import './App.css';
// const cadastro = 'http://api-navetest.herokuapp.com/v1/users/signup'
// const cadastro = 'http://api-navetest.herokuapp.com/v1/users?ranking=true'
const cadastro = 'http://api-navetest.herokuapp.com/v1/users/login'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  compareInformation(e) {
    e.preventDefault();
    
    const form = {
      email: this.state.email.value,
      password: this.state.password.value
    }
    console.log(form);

    Axios.post(cadastro, form)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  
  render() {
    return (
        <section className="container-login">
            <h1>Login</h1>
            <div className="row">
                <label>Email:</label>
                <input type="email" className="field" ref={(e) => this.state.email = e} />
            </div>
            <div className="row">
                <label>Password:</label>
                <input type="password" className="field" ref={(e) => this.state.password = e} />
            </div>
            <div className="row">
                <button typ="button" className="button" onClick={ (e) => this.compareInformation(e) }>Confirm</button>
            </div>
        </section>
    );
  }
}

export default Login;
