import * as React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

interface MenuProps {

}

export const Menu: React.SFC<MenuProps> = (props) => (
    <div>
        <MenuItem active><Link to="/attractions">Atrakcje</Link></MenuItem>
        <MenuItem>Historia</MenuItem>
        <MenuItem>Inni Piszą</MenuItem>
        <MenuItem>Galeria</MenuItem>
        <MenuItem>Kontakt</MenuItem>  
    </div>
);