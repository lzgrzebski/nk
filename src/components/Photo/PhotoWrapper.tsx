import styled from 'styled-components';
import { withProps } from '../../globalStyles/utils/withProps';

interface PhotoWrapperProps {
    ratio?: number;
}

export default withProps<PhotoWrapperProps>()(styled.div)`
    display: block;
    padding-top: ${ (p: PhotoWrapperProps) => p.ratio ? p.ratio * 100 :  270 / 450 * 100 }%;
    background-color: #f2f2f2;
    border-radius: 3px;
`;