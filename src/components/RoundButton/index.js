import React from 'react';

import RoundButtonStyle from './styles';

const RoundButton = ({ color, size }) => {
    return (
        <RoundButtonStyle 
            color={color}
            size={size}
        />
    )
};

export default RoundButton;