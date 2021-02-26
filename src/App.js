import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
Container,
Row,
Col
} from 'reactstrap';

import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

const App = () => {

  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = () => {
    const dataArray = [];
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        dataArray.push(res.data);
        setPokemonType(res.data.types[0].type.name)
        setPokemonData(dataArray[0]);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="App">
        <Navbar />
        <Container className="mt-5 pt-5">
          <Row>
            <Col>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter Pokemon Name"
                />
              </form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Pokedex 
                pokemon={pokemon}
                pokemonData={pokemonData}
                pokemonType={pokemonType}
              />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;