import React, { useState } from 'react';

import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';
import RoundButton from '../RoundButton';
import Namebar from '../Namebar';
import ImageBox from '../ImageBox';
import PokeButton from '../PokeButton';

import LeftPanelStyle from './styles';

const LeftPanel = (
    pokemon,
    pokemonData,
    pokemonType,
) => {
    return (
        <LeftPanelStyle>
            <Container>
                <Row>
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
                    <Namebar />
                </Row>
                <Row>
                    <ImageBox />
                </Row>
                <Row>
                    <Col>
                        <PokeButton />
                    </Col>
                    <Col>
                        <PokeButton />
                    </Col>
                    <Col>
                        <PokeButton />
                    </Col>
                </Row>
            </Container>
        </LeftPanelStyle>
    )
};

export default LeftPanel;