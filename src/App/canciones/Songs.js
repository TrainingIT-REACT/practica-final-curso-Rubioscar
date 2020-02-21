import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { getAlbumSongs } from '../actions/songs';
import { getAlbum } from '../actions/albums';

// Css
import '../App.css';
import Load from '../Load';

class Songs extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        //console.log(props.match.params.id);
        this.state = {
            idAlbum: props.match.params.id,
        };
    }

    componentDidMount() {
        this.props.fetchSongs(parseInt(this.state.idAlbum));
        this.props.fectchAlbum(parseInt(this.state.idAlbum));
    }

    onClick() {
    }

    render() {
      const { album } = this.props;

      return (
        <div className="App">
          <Row>
            <Col>
             { this.props.loading ?
              <Load/>
              : <Card>
                <Card.Img variant="top" src={album.cover} />
                <Card.Body>
                  <Card.Title>Autor: {album.artist}</Card.Title>
                  <Card.Text>
                    Album: {album.name}
                  </Card.Text>
                </Card.Body>
              </Card>
             }
            </Col>
            <Col>
              { this.props.isloading ?
                  <Load/>
                  : <ListGroup >
                      {this.props.songs.map(song =>
                          <ListGroup.Item action onClick={() => this.onClick()}>
                              Nombre: {song.name} Duracion: {song.seconds} sec
                          </ListGroup.Item>
                      )}
                  </ListGroup>
                }
            </Col>
          </Row>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    songs: state.canciones.songs,
    isloading: state.canciones.isLoading,
    loading:  state.albun.isLoading,
    album: state.albun.album,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (id) => dispatch(getAlbumSongs(id)),
  fectchAlbum: (id) => dispatch(getAlbum(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);