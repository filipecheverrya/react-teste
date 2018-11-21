import React, { Component } from 'react';
import Axios from 'axios';
// import './App.css';
// const cadastro = 'http://api-navetest.herokuapp.com/v1/users/signup'
const cadastro = 'http://api-navetest.herokuapp.com/v1/users?ranking=true'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    };
  }

  saveInformation(e) {
    e.preventDefault();
    const form = {
      name: this.user.value,
      password: this.pass.value,
      email: this.email.value
    }
    Axios.get(cadastro, form)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))    
  }

  render() {
    return (
        <section className="container-login">
            <h1>Sign Up</h1>
            <div className="row">
                <label>Email:</label>
                <input type="email" className="field" ref={(email) => this.email = email} />
            </div>
            <div className="row">
                <label>Password:</label>
                <input type="password" className="field" ref={(pass) => this.pass = pass} />
            </div>
            <div className="row">
                <label>Username:</label>
                <input type="text" className="field" ref={(user) => this.user = user} />
            </div>
            <div className="row">
                <button typ="button" className="button" onClick={ (e) => this.saveInformation(e) }>Confirm</button>
            </div>
        </section>
    );
    // console.log(form);
    
  }
}

export default SignUp;
