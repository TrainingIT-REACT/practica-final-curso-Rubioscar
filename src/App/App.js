import React, { Component } from 'react';
//import Load from './Load';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Albums from './albunes/Albums';
import Songs from './canciones/Songs';
import Inicio from './Inicio';
import store from './store';
import { Provider } from "react-redux";

// Css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }*/

  /*async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }*/

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <h1>Spotify falso!</h1>
            <p>
              <NavLink exact to="/home">Inicio</NavLink>
              {' '}
              <NavLink to="/albums">Albums</NavLink>
            </p>
          </div>
          <Route path="/home" exact component={Inicio}/>
          <Route path="/albums" exact component={Albums}/>
          <Route path="/albums/:id" component={Songs}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
