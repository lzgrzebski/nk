import styled from 'styled-components';
import { styleVariables } from './../../globalStyles/variables';

export default styled.div`
    display:flex;
    width: 100%;
    max-width: ${ styleVariables.sizes.contentWrapper };
    margin: 0 auto;
`;
