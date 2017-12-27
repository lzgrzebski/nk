import { withProps } from '../../globalStyles/utils/withProps';
import styled from 'styled-components';
import { styleVariables } from '../../globalStyles/variables';

interface GalleryTabItemProps {
    active?: boolean;
}

export default withProps<GalleryTabItemProps>()(styled.span)`
    font-size: 16px;
    font-weight: 400;
    color: #a0a0a0;
    
    margin-left:15px;
    margin-right: 15px;

    position: relative;
    top: -1px;
    
    .active,
    &:hover a {
        background-color: ${ styleVariables.colors.primary };
        color: #fff;
    }

    a {
        display: block;
        padding: 7px 10px;
        border-radius: 3px;
        color: inherit;
        text-decoration: none;
    }

    &:last-child {
        margin-right: 0;
    }

`;