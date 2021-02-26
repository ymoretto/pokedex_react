import React from 'react';
import GroupStyle from './styles';
import PokeButton from '../PokeButton';

import { 
    Container,
    Row,
    Col
    } from 'react-bootstrap';

const GroupButton = () => {
    return (
        <GroupStyle>
            <PokeButton />
            <PokeButton />
        </GroupStyle>
    )
}

export default GroupButton;
