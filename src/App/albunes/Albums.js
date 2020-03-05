import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import { connect } from 'react-redux';
import { getAlbums } from '../actions/albums';
import { setAlbum } from "../actions/historico";

// Css
import '../App.css';
import Load from '../Load';

class Albums extends Component {

    componentDidMount() {
      this.props.fetchAlbums();
      /*try {
        const res = await fetch('/albums');
        const json = await res.json();
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          albums: json
        }));
      } catch(err) {
        console.error("Error accediendo al servidor", err);
      }*/
    }

    onClick(album) {
      this.props.setAlbumHistory(album);
      this.props.history.push(`/albums/${album.id}`);
    }

    render() {
      return (
        <div className="App">
          <div className="row">
            { this.props.isloading ?
                <Load/>
                : <CardDeck>
                    {this.props.albums.map(album => 
                      <Card className="cardcss" style={{ 'margin-bottom': '15px' }}>
                        <Card.Img variant="top" src={album.cover} />
                        <Card.Body>
                          <Card.Title>Autor: {album.artist}</Card.Title>
                          <Card.Text>
                            Album: {album.name}
                          </Card.Text>
                          <Button onClick={() => this.onClick(album)}>Entrar</Button>
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

const mapStateToProps = (state) => {
  return {
    albums: state.albunes.albums,
    isloading: state.albunes.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(getAlbums()),
  setAlbumHistory: (album) => dispatch(setAlbum(album)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);