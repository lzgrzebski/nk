import * as React from 'react';
import LogoText from './LogoText';
import { Link } from 'react-router-dom';

interface LogoProps {

}

export const Logo: React.SFC<LogoProps> = (props) => (
    <LogoText>
        <Link to="/">
            Nasze Krzywczyce
        </Link>
    </LogoText>
);