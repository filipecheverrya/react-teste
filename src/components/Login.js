import React, { Component } from 'react';
import $ from 'jquery';
import Axios from 'axios';
const login_URL = 'http://api-navetest.herokuapp.com/v1/users/login'

function handlerLogged(key) {
  const userID = key;
  console.log(userID)
  $('.form-login').fadeOut(600, () => {
    $('.logged-message').addClass('on')
  })
}

function handlerError() {
  console.log('deu ruim doido')
}

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
    .then(response => {
      response.status === 200 ? handlerLogged(response.data.id) : handlerError()
      console.log(response)
    })
    .catch(err=>console.log(err))
  }
  
  render() {
    return (
        <section className="container-default" id="pg-login">
          <form className="form-login">
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
          </form>
          <div className="logged-message">Logged</div>
        </section>
    );
  }
}

export default Login;
