import React, { Component } from 'react';
//import Load from './Load';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Albums from './albunes/Albums';
import Songs from './canciones/Songs';
import Inicio from './Inicio';
import Login from './usuario/Login';
import Perfil from './usuario/Perfil';
import Song from './canciones/Song';
import store from './store';
import { Provider } from "react-redux";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserContext from './usuario/context/UserContext';
import PrivateRoute from './usuario/PrivateRoute';

// Css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  onclick() {
    this.updateUser(false);
  }

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
          <UserContext.Provider value={this.state}>
            <div className="App">
              <h1>Spotify falso!</h1>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Falso</Navbar.Brand>
                <Nav className="mr-auto">
                  <NavLink to="/home" className="navlink">Home</NavLink>
                  <NavLink to="/albums" className="navlink">Albums</NavLink>
                  <NavLink to="/user" className="navlink">Perfil</NavLink>
                </Nav>
                { (!this.state.signedIn) ?
                  <NavLink to="/login">
                    <Button variant="outline-info">Login</Button>
                  </NavLink> :
                  <Button variant="outline-info" onClick={() => this.onclick()}>Logout</Button>
                }
              </Navbar>
            </div>
            <Route path="/home" exact component={Inicio}/>
            <Route path="/albums" exact component={Albums}/>
            <Route path="/albums/:id" component={Songs}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/user" component={Perfil}/>
            <Route path="/song/:id" component={Song}/>
          </UserContext.Provider>
        </Router>
      </Provider>
    );
  }
}

export default App;
