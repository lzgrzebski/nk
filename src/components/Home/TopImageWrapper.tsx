import { from } from '../../globalStyles/utils/from';
import styled, { css } from 'styled-components';

export default styled.div`
    border-radius: 3px;
    
    ${from('tablet')(css`
        position: absolute;
        max-width: 65.6%;
        top: 0;
        right: 15px;

        z-index:-1;
    `)}

    img {
        width: 100%;
    }
`;