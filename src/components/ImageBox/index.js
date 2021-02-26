import React from 'react';
import ImageBoxStyle from './styles';
import GroupButton from '../GroupButton';

import pokeball from '../../img/pokeball.svg';

import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';

const ImageBox = ({pokemonData}) => {

    return (
        <Container>
            <Row>
                <Col>
                    <ImageBoxStyle>
                        {pokemonData != '' 
                            ? <img src={pokemonData.sprites.front_default} alt="pokemon"/>
                            : <div>
                                <img src={pokeball} alt="pokeball"/>
                            </div>    
                        }
                    </ImageBoxStyle>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GroupButton />
                </Col>
            </Row>
            

        </Container>
    )
};

export default ImageBox;
