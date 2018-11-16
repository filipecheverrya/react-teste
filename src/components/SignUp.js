import React, { Component } from 'react';
import Axios from 'axios';
// import './App.css';
const cadastro = 'http://api-navetest.herokuapp.com/v1/users/signup'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  saveInformation(e) {
    e.preventDefault();
    const form = {
      name: this.state.name.value,
      password: this.state.password.value,
      email: this.state.email.value
    }
    Axios.post(cadastro, form)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }

//   onSignIn(e) {
//     e.preventDefault();
//     console.log(e);
//   }
  
  render() {
    return (
        <section className="container-login">
            <h1>Sign Up</h1>
            <div className="row">
                <label>Username:</label>
                <input type="text" className="field" ref={(e) => this.state.name = e} />
            </div>
            <div className="row">
                <label>Password:</label>
                <input type="password" className="field" ref={(e) => this.state.password = e} />
            </div>
            <div className="row">
                <label>Email:</label>
                <input type="email" className="field" ref={(e) => this.state.email = e} />
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
