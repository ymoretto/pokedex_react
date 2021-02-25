import React from 'react';

import NamebarStyle from './styles';

const Namebar = ({pokemonData}) => {
    return (
        <NamebarStyle>
            <h1>{pokemonData.name} {pokemonData.id}</h1>
        </NamebarStyle>
    )
};

export default Namebar;