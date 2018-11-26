import React, { Component } from 'react';

function handlerIntruder() {
  let tokenLocal = window.sessionStorage.token,
      rgx = '.*(?=me/)',
      now_URL = window.location.href.match(rgx);
  if (tokenLocal === undefined) {
    window.location.href = now_URL+'login/'
  } else {
    console.log('logou')
  }
}

class HomeLogged extends Component {

  render() {
    return (
        <section className="container-default" id="pg-logged" onLoad={handlerIntruder()}>
          <h1>Logado</h1>
        </section>
    );
  }
}

export default HomeLogged;