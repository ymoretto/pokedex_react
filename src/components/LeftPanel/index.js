import React from 'react';

import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';
import RoundButton from '../RoundButton';
import Namebar from '../Namebar';
import ImageBox from '../ImageBox';

import LeftPanelStyle from './styles';

const LeftPanel = ({pokemonData, pokemonFront, pokemonBack, pokemonShiny}) => {
    return (
        <LeftPanelStyle>
            <Container>
                <Row className="row-buttons">
                    <RoundButton 
                        color={'#3B4CCA'}
                        size={'50px'}
                    />
                    <RoundButton 
                        color={'#CC0000'}
                        size={'25px'}
                    />
                    <RoundButton 
                        color={'#FFDE00'}
                        size={'25px'}
                    />
                    <RoundButton 
                        color={'#526b2d'}
                        size={'25px'}
                    />
                </Row>
                <Row>
                    <Namebar 
                        pokemonData={pokemonData}
                    />
                </Row>
                <Row className="mb-2 mt-2">
                    <ImageBox 
                        pokemonData={pokemonData}
                        pokemonFront={pokemonFront}
                        pokemonBack={pokemonBack}
                        pokemonShiny={pokemonShiny}
                    />
                </Row>
            </Container>
        </LeftPanelStyle>
    )
};

export default LeftPanel;