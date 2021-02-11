import React from 'react';
import PokedexStyle from './styles';

import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
import Divider from '../Divider';

const Pokedex = () => {
    return (
        <PokedexStyle>
            <LeftPanel />
            <Divider />
            <RightPanel />
        </PokedexStyle>
    )
};

export default Pokedex;
