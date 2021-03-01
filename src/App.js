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

import pokeball from './img/pokeball.svg';

const App = () => {

  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonFront, setPokemonFront] = useState([]);
  const [pokemonBack, setPokemonBack] = useState([]);
  const [pokemonShiny, setPokemonShiny] = useState([]);
  const [pokemonImg, setPokemonImg] = useState(pokeball);

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
        setPokemonFront(res.data.sprites.front_default);
        setPokemonBack(res.data.sprites.back_default);
        setPokemonShiny(res.data.sprites.front_shiny);
        setPokemonImg(res.data.sprites.front_default);
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
            <Col className="d-flex justify-content-center">
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
                pokemonFront={pokemonFront}
                pokemonBack={pokemonBack}
                pokemonShiny={pokemonShiny}
                pokemonImg={pokemonImg}
              />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;