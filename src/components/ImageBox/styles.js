import styled from 'styled-components';

const ImageBoxStyle = styled.div`
    background: lightyellow;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px black solid;
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

export default ImageBoxStyle;
