import React from 'react';

import RightPanelStyle from './styles';
import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';
import InputSearch from '../InputSearch';
import Description from '../Description';
import TypeBadge from '../TypeBadge';
import StatsBox from '../StatsBox';

const RightPanel = () => {
    return (
        <RightPanelStyle>
            <Container> 
                <Row>
                    <Col>
                        <InputSearch />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Description />
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
