import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setUser } from '../actions/user';
import { connect } from 'react-redux';
import UserContext from './context/UserContext';
import Alert from 'react-bootstrap/Alert';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeApellido = this.onChangeApellido.bind(this);
        this.onChangeDescrip = this.onChangeDescrip.bind(this);

        this.location = this.props.location;

        this.state = {
            name: null,
            apellido: null,
            descripcion: null,
        };
    }

    onSubmit(updateUser) {
        updateUser(true);

        this.props.setUser(
            {
                name: this.state.name,
                apellido: this.state.apellido,
                descripcion: this.state.descripcion
            }
        )

        this.props.history.push(`/user`);
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeApellido(e) {
        this.setState({ apellido: e.target.value });
    }

    onChangeDescrip(e) {
        this.setState({ descripcion: e.target.value });
    }

    render() {

      return (
          <UserContext.Consumer>
              {({ updateUser }) =>
                <div className="App">
                    <Form onSubmit={() => this.onSubmit(updateUser)}>
                        <Form.Group>
                            <Form.Label htmlFor="name">
                                Introduce tu nombre
                            </Form.Label>
                            <Form.Control id="name" type="text" value={this.state.name} 
                            placeholder="Nombre" onChange={this.onChangeName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Introduce tu apllido
                            </Form.Label>
                            <Form.Control id="apellido" type="text" value={this.state.apellido} 
                            placeholder="Apellidos" onChange={this.onChangeApellido}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Introduce tu descripcion
                            </Form.Label>
                            <Form.Control id="descripcion" as="textarea" rows="3" value={this.state.descripcion} 
                            placeholder="Descripcion" onChange={this.onChangeDescrip}/>
                        </Form.Group>
                        <Button type="submit">Logeate!</Button>
                    </Form>
                    { (this.location.state && this.location.state.message) ?
                        <div>
                            <br></br>
                            <Alert variant='primary'>
                            { this.location.state.message }
                            </Alert>
                        </div>
                        : null
                    }
                </div>
              }
            </UserContext.Consumer>
      );
    }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Login);