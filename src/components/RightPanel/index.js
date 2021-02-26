import React from 'react';

import RightPanelStyle from './styles';
import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';
import Description from '../Description';
import TypeBadge from '../TypeBadge';
import StatsBox from '../StatsBox';

const RightPanel = (pokemon, pokemonData, pokemonType) => {
    return (
        <RightPanelStyle>
            <Container> 
                <Row>
                    <Col>
                        <Description 
                            pokemon={pokemon}
                            pokemonData={pokemonData}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TypeBadge />
                    </Col>
                    <Col>
                        <TypeBadge />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StatsBox />
                    </Col>
                </Row>
            </Container>
        </RightPanelStyle>
    )
};

export default RightPanel;
