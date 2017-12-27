import * as React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';

interface MenuProps {

}

const links = [
    { name: 'Atrakcje', path: '/attractions' },
    { name: 'Historia', path: '/history' },
    { name: 'Galeria', path: '/gallery' },
    { name: 'Kontakt', path: '/contact' }
];
export const Menu: React.SFC<MenuProps> = (props) => (
    <div>
        {
            links.map(link => (
                <MenuItem key={link.path}>
                    <NavLink to={link.path} activeClassName="active">{link.name}</NavLink>
                </MenuItem>
            ))
        }
    </div>
);