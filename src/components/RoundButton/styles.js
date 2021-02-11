import styled from 'styled-components';

const RoundButtonStyle = styled.span`
    border-radius: 50%;
    display: inline-block;

    //color options
    background-color: ${props => props.color};

    //button size
    width: ${props=>props.size};
    height: ${props=>props.size};
`;

export default RoundButtonStyle;
