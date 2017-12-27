import * as React from 'react';
import LogoText from './LogoText';
import { NavLink } from 'react-router-dom';

interface LogoProps {

}

export const Logo: React.SFC<LogoProps> = (props) => (
    <LogoText>
        <NavLink to="/" exact activeClassName="active">
            Krzywczyce
        </NavLink>
    </LogoText>
);