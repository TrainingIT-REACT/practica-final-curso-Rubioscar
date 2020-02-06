import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'

class Load extends Component {
  render() {
    return(
      <div>
        <Spinner animation="grow" variant="primary" />
      </div>

    )
  }
}

export default Load;
