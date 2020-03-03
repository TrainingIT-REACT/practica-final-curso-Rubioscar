import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);

        this.state = {
            name: null,
            apellido: null,
            descripcion: null,
        };
    }

    componentDidMount() {
    }

    onSubmit() {
        console.log(this.state.name);
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeApellido(e) {
        console.log(e);
    }

    render() {

      return (
        <div className="App">
            <Form onSubmit={() => this.onSubmit()}>
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
                    <Form.Control id="apellido" type="text" value={this.state.name} 
                    placeholder="Apellidos" onChange={(ref) => this.onChangeApellido(ref)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Introduce tu descripcion
                    </Form.Label>
                    <Form.Control id="descripcion" as="textarea" rows="3" value={this.state.name} 
                    placeholder="Descripcion" onChange={this.onChangeName}/>
                </Form.Group>
                <Button type="submit">Logeate!</Button>
            </Form>
        </div>
      );
    }
}

/*const mapStateToProps = (state) => {
  return {
    songs: state.canciones.songs,
    isloading: state.canciones.isLoading,
    loading:  state.albun.isLoading,
    album: state.albun.album,
  }
};*/

/*const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (id) => dispatch(getAlbumSongs(id)),
  fectchAlbum: (id) => dispatch(getAlbum(id)),
});*/

export default (Login);