import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
// Css
import '../App.css';
import { Row, Col, ListGroup } from 'react-bootstrap';

class Perfil extends Component {


    onClickSong(id) {
      this.props.history.push(`/song/${id}`);
    }

    onClickAlbum(id) {
      this.props.history.push(`/albums/${id}`);
    }

    render() {
      const { user, songs, albums } = this.props;

      return (
        <div className="App">
          <Row>
            <Col>
              <Card>
                <Card.Header>Informacion usuario</Card.Header>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>{user.apellido}</Card.Title>
                    <Card.Text>
                        {user.descripcion}
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <h4>Historico de canciones</h4>
              <ListGroup >
                  {songs.map(songs =>
                    <ListGroup.Item action onClick={() => this.onClickSong(songs.id)}>
                      Nombre: {songs.name} Duracion: {songs.seconds} sec
                    </ListGroup.Item> 
                  )}
              </ListGroup>
            </Col>
            <Col>
              <h4>Historico de albunes</h4>
              <ListGroup >
                  {albums.map(albums =>
                    <ListGroup.Item action onClick={() => this.onClickAlbum(albums.id)}>
                      Nombre: {albums.name} Duracion: {albums.artist} sec
                    </ListGroup.Item> 
                  )}
              </ListGroup>
            </Col>
          </Row>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.usuario,
    songs: state.historico.songs,
    albums: state.historico.albums,
  }
};

export default connect(
  mapStateToProps
)(Perfil);