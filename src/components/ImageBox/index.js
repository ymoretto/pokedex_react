import React from 'react';
import {ImageBoxStyle, ButtonStyle} from './styles';

import pokeball from '../../img/pokeball.svg';

import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';

const ImageBox = ({pokemonData}) => {


    const handleClickShiny = () => {
        console.log("Shiny!");
    }
    const handleClickFront = () => {
        console.log("Front!");
    }
    const handleClickBack = () => {
        console.log("Back!");
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ImageBoxStyle>
                        {pokemonData !== '' 
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
                    <div className="d-flex justify-content-around align-items-center">
                        <ButtonStyle 
                            name="shiny"
                            id="shiny"
                            onClick={handleClickShiny}
                        >
                            Shiny
                        </ButtonStyle>
                        <ButtonStyle 
                            name="front"
                            id="front"
                            onClick={handleClickFront}
                        >
                            Front
                        </ButtonStyle>
                        <ButtonStyle 
                            name="back"
                            id="back"
                            onClick={handleClickBack}
                        >
                            Back
                        </ButtonStyle>
                    </div>
                </Col>
            </Row>
            

        </Container>
    )
};

export default ImageBox;
