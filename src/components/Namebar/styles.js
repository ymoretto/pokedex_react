import styled from 'styled-components';

const NamebarStyle = styled.div`
    background-color: lightgreen;
    border: 1px black solid;
    width: 100%;
    height: 50px;
    font-family: "pokemon-font", monospace;
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    h1, h2, h3{
        margin: 0;
    }
    h2 {
        color: black;
        opacity: 50%;
        padding-top: 5px;
    }
`;

export default NamebarStyle;