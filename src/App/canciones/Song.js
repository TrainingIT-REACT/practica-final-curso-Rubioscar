import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { getSong } from '../actions/songs';
import ReactAudioPlayer from 'react-audio-player';

// Css
import '../App.css';
import Load from '../Load';

class Song extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        //console.log(props.match.params.id);
        this.state = {
            idSong: props.match.params.id,
        };
    }

    componentDidMount() {
        this.props.fetchSong(parseInt(this.state.idSong));
    }

    onClick() {
    }

    render() {
      const { song } = this.props;

      return (
        <div className="App">
          <Row>
            <Col>
             { this.props.loading ?
              <Load/>
              : <Card>
                    <Card.Header>Informacion de la cancion</Card.Header>
                    <Card.Body>
                        <Card.Title>{song.name}</Card.Title>
                        <Card.Text>
                            Esperamos que disfrute de la canción  {song.name}. Esta subida con todo nuestro amor
                        </Card.Text>
                    </Card.Body>
              </Card>
             }
            </Col>
            <Col>
              { this.props.isloading ?
                  <Load/>
                  : <ReactAudioPlayer
                      src={song.audio}
                      autoPlay
                      controls
                    />
                }
            </Col>
          </Row>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    song: state.cancion.song,
    isloading: state.cancion.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchSong: (id) => dispatch(getSong(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);