import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { getAlbumSongs } from '../actions/songs';

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
        console.log(this.state.idAlbum);
        this.props.fetchSongs(this.state.idAlbum);
    }

    onClick(e) {
    }

    render() {
      return (
        <div className="App">
          <div className="row">
            { this.props.isloading ?
                <Load/>
                : <ListGroup >
                    {this.props.songs.map(song =>
                        <ListGroup.Item action onClick={() => this.onClick}>
                            Nombre: {song.name} Duracion: {song.seconds} sec
                        </ListGroup.Item>
                    )}
                </ListGroup>
              }
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    songs: state.canciones.songs,
    isloading: state.canciones.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (id) => dispatch(getAlbumSongs(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);