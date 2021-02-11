import React from 'react';
import NavStyle from './styles';
import pokeball from '../../img/pokeball.svg';

const Navbar = () => {
    return (
        <NavStyle className="navbar navbar-expand-md fixed-top">
            <h1>Just Another Pokedex</h1>
            <img src={pokeball} alt="pokeball"/>
        </NavStyle>
    )
};

export default Navbar;
