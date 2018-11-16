import React, { Component } from 'react';
// import Axios from 'axios';
import './App.css';

// const PokeAPI = 'https://pokeapi.co/api/v2/';
// const Url = 'http://api-navetest.herokuapp.com/v1/';
// const Url_user = 'http://api-navetest.herokuapp.com/v1/users/';
// const customData;

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
      password: this.state.password.value,
      email: this.state.email.value
    }
  }

  onSignIn(e) {
    e.preventDefault();
    console.log(e);
  }
  
  // render() {
  //   return ();
  // }
}

export default App;
