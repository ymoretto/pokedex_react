import React from 'react';

import PokedexStyle from './styles';

import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
import Divider from '../Divider';

const Pokedex = ({pokemon, pokemonData, pokemonType}) => {

    return (
        
         <PokedexStyle>
             <LeftPanel
                pokemon={pokemon}
                pokemonData={pokemonData}
                pokemonType={pokemonType}
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
