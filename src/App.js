import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
Container,
Row,
Col
} from 'react-bootstrap';

import Pokedex from './components/Pokedex';

const App = () => {

  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="App">
      {/* <Navbar /> */}
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name"/>
            </label>
          </form>
          {pokemonData.map((data) => {
            return(
              <div className="container">
                <div className="divTable">
                  <div className="divTableBody"></div>
                  <div className="divTableRow">
                    <div className="divTableCell">Name</div>
                    <div className="divTableCell"> {data.name} </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Type</div>
                    <div className="divTableCell">{pokemonType}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Height</div>
                    <div className="divTableCell">{(data.height / 10)} m</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Weight</div>
                    <div className="divTableCell">{(data.weight / 10)} kg</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">HP</div>
                    <div className="divTableCell">{data.stats[0].base_stat}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">
                      <img src={data.sprites.front_default} alt={data.name}/>
                    </div>
                  </div>
                </div>
              </div>
            )
          })

          }

        </Col>
      </Row>
      <Container>
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
