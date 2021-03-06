import { withProps } from '../../../globalStyles/utils/withProps';
import styled from 'styled-components';
import { styleVariables } from '../../../globalStyles/variables';

interface MenuItemProps {
    active?: boolean;
}

export default withProps<MenuItemProps>()(styled.span)`
    font-size: 16px;
    font-weight: 400;
    color: #a0a0a0;
    
    margin-left:15px;
    margin-right: 15px;

    position: relative;
    top: -1px;
    
    .active,
    &:hover {
        color: ${ styleVariables.colors.primary };
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    &:last-child {
        margin-right: 0;
    }

`;