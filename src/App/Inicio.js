import React, { Component } from 'react';
import { connect } from 'react-redux';
import Load from './Load';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import { getTrendsSongs } from './actions/songs';

// Css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Inicio extends Component {

  componentDidMount() {
    this.props.fetchTrends();
  }

  onClick(id) {
    this.props.history.push(`/song/${id}`);
  }

  render() {
    return (
        <div className="App">
          <h1>Musica Recomendada!</h1>
          <div className="row">
            { this.props.isloading ?
                <Load/>
                : <CardDeck>
                    {this.props.trends.map(song => 
                      <Card className="cardcss" style={{ 'margin-bottom': '15px' }}>
                        <Card.Body>
                          <Card.Title>Name: {song.name}</Card.Title>
                          <Card.Text>
                            Esta canción tiene una duración de:
                                      {song.seconds} sec
                          </Card.Text>
                          <Button onClick={() => this.onClick(song.id)}>Reproducir</Button>
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
    trends: state.tendencias.trends,
    isloading: state.tendencias.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchTrends: () => dispatch(getTrendsSongs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inicio);
