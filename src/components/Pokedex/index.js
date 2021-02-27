import React from 'react';

import PokedexStyle from './styles';

import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
import Divider from '../Divider';

const Pokedex = ({pokemon, pokemonData, pokemonType, pokemonFront, pokemonBack, pokemonShiny}) => {

    return (
        
         <PokedexStyle>
             <LeftPanel
                pokemonData={pokemonData}
                pokemonFront={pokemonFront}
                pokemonBack={pokemonBack}
                pokemonShiny={pokemonShiny}
             />
             <Divider />
             <RightPanel 
                pokemon={pokemon}
                pokemonData={pokemonData}
                pokemonType={pokemonType}
             />
         </PokedexStyle>
    )
};

export default Pokedex;
