import { findByLabelText } from '@testing-library/react';
import styled from 'styled-components';

const LeftPanelStyle = styled.div`
    width: 100em;
    margin: 1rem 2rem;
    .row-buttons{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 1rem;
    }

`;

export default LeftPanelStyle;