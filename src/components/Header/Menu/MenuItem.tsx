import { withProps } from '../../../globalStyles/utils/withProps';
import styled from 'styled-components';

interface MenuItemProps {
    active?: boolean;
}

export default withProps<MenuItemProps>()(styled.span)`
    font-size: 15px;
    font-weight: 400;
    color: #a0a0a0;

    border-bottom: 4px solid ${(p: MenuItemProps) => p.active ? '#e7f7f3' : 'transparent'};
    box-shadow: inset 0 -2px 0 ${(p: MenuItemProps) => p.active ? '#e7f7f3' : 'transparent'};
    
    margin-left:15px;
    margin-right: 15px;
    
    .active,
    &:hover {
        border-bottom: 4px solid #e7f7f3;
        box-shadow: inset 0 -2px 0 #e7f7f3;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;