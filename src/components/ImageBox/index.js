import React, { useState } from 'react';
import {ImageBoxStyle, ButtonStyle} from './styles';

import pokeball from '../../img/pokeball.svg';

import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';

const ImageBox = ({pokemonData, pokemonFront, pokemonBack, pokemonShiny}) => {

    const [pokeImg, setPokeImg] = useState([pokemonData.sprites.front_default]);


    const handleClickShiny = () => {
        setPokeImg([pokemonShiny])
        console.log(pokemonShiny);
    }
    const handleClickFront = () => {
        setPokeImg([pokemonFront])
        console.log(pokemonFront);
    }
    const handleClickBack = () => {
        setPokeImg([pokemonBack])
        console.log(pokemonBack);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ImageBoxStyle>
                        {pokemonFront == '' 
                            ? <div>
                                <img src={pokeball} alt="pokeball"/>
                            </div>
                            : <img src={pokeImg} alt="pokemon"/>  
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
