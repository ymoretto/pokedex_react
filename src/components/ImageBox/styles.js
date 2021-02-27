import styled from 'styled-components';

import "@fontsource/dotgothic16"

export const ImageBoxStyle = styled.div`
    background: lightyellow;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px black solid;
    margin-bottom: 5px;
    img {
        width: 50%;
    }
    div{
        display:flex;
        justify-content: center;
        align-items: center;
        opacity: 20%;
    }
`;

export const ButtonStyle = styled.button`
    font-family: 'DotGothic16', sans-serif;
    font-weight: bold;
    border: 1px black solid;
    border-radius: 20px;
    background-color: #FFDE00;
    margin: 2px 5px;
    width: 100px;
    height: 30px;
    text-decoration: none;
    box-shadow: 0 3px #7e7014;
    :hover{
        background-color: #f6eca9;
        border: none;
    }
    :active{
        background-color: #FFDE00;
        box-shadow: 0 3px #7e7014;
        transform: translateY(4px);
    }
`; 