import React from 'react';

import DividerStyle from './styles';
import Hinge from '../Hinge';

const Divider = () => {
    return (
        <DividerStyle>
            <Hinge />
            <Hinge />
            <Hinge />
        </DividerStyle>
    )
};

export default Divider;