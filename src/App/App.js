import React, { Component } from 'react';
import Load from './Load';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Albums from './Albums';
import Inicio from './Inicio'

// Css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
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
  }

  render() {
    return (
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
      </Router>
    );
  }
}

export default App;
