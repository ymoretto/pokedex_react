import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
Container,
Row,
Col
} from 'react-bootstrap';

import axios from 'axios';

import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col>
            <Pokedex />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
