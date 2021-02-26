import React from 'react';
import DescriptionStyle from "./styles";

const Description = ({pokemon, pokemonData}) => {

    return (
        <DescriptionStyle>
            <h1>Este pokemon:</h1>
            <p>{pokemonData.name}</p>
            <p>outra coisa aqui</p>
        </DescriptionStyle>
    )
};

export default Description;
