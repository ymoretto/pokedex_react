import React from 'react';

import NamebarStyle from './styles';

import { 
    Container
    } from 'react-bootstrap';

const Namebar = ({pokemonData}) => {
    return (
        <Container>
            <NamebarStyle>
                {(pokemonData != '')
                    ? <div>
                        <h1>{pokemonData.name.toUpperCase()}</h1>
                        <h3>nº{pokemonData.id}</h3>
                    </div>
                    : <div>
                        <h2>Waiting for Data</h2>
                    </div>
                }
                
            </NamebarStyle>
        </Container>
    )
};

export default Namebar;