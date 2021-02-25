import React from 'react';

const Pokedex = ({pokemon, pokemonData, pokemonType}) => {
    return(
        <div>
            <p>this is a pokedex about:</p>
            <p> {pokemonData.name} </p>
        </div>
    )
}

export default Pokedex;
