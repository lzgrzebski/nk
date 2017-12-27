import { withProps } from '../../globalStyles/utils/withProps';
import styled from 'styled-components';
import { styleVariables } from './../../globalStyles/variables';

interface ContentContainerProps {
    direction?: string;
    margin?: string;
    center?: boolean;
}

export default withProps<ContentContainerProps>()(styled.div)`
    display:flex;
    flex-direction: ${ (p: ContentContainerProps) => p.direction ? p.direction :  'row' };
    width: 100%;
    max-width: ${ styleVariables.sizes.contentWrapper }px;
    margin: ${ (p: ContentContainerProps) => p.margin ? p.margin :  '20px auto' };
    position: relative;

    padding-left: 15px;
    padding-right: 15px;

    ${ (p: ContentContainerProps) => p.center ? `justify-content: center` : ''};
`;