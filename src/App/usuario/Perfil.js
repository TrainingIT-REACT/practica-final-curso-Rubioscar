import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';

// Css
import '../App.css';
import Load from '../Load';

class Perfil extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      const { user } = this.props;

      return (
        <div className="App">
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
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.usuario,
  }
};

export default connect(
  mapStateToProps
)(Perfil);