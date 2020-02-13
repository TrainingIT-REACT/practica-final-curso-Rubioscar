import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';

// Css
import './App.css';
import Load from './Load';

class Albums extends Component {
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
        <div className="App">
          <div className="row">
            { this.state.loading ?
                <Load/>
                : <CardDeck>
                    {this.state.albums.map(album => 
                      <Card className="cardcss" style={{ 'margin-bottom': '15px' }}>
                        <Card.Img variant="top" src={album.cover} />
                        <Card.Body>
                          <Card.Title>Autor: {album.artist}</Card.Title>
                          <Card.Text>
                            Cancion: {album.name}
                          </Card.Text>
                          <Button>Entrar</Button>
                        </Card.Body>
                      </Card>
                      )}
                  </CardDeck>
              }
          </div>
        </div>
      );
    }
}

export default Albums;