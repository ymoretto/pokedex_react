import styled from 'styled-components';

const RoundButtonStyle = styled.span`
    border-radius: 50%;
    border: 1px black solid;
    display: inline-block;
    margin: 5px;

    //color options
    background-color: ${props => props.color};

    //button size
    width: ${props=>props.size};
    height: ${props=>props.size};
`;

export default RoundButtonStyle;
