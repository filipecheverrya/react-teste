import React, { Component } from 'react';
import Axios from 'axios';

const list_URL = 'http://api-navetest.herokuapp.com/v1/users?ranking=true'

class ListAllUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  compareInformation(e) {
    e.preventDefault();
    // const form = {
    //   email: this.email.value,
    //   password: this.pass.value
    // }
    // console.log(form);
    
    Axios.get(list_URL)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  
  render() {
    return (
        <section className="container-default">
            <h1>List All Users</h1>
            <div className="row">
                <button typ="button" className="button" onClick={(e) => this.compareInformation(e) }>
                  Try
                </button>
            </div>
        </section>
    );
  }
}

export default ListAllUsers;
