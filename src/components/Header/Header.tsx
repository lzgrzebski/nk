import * as React from 'react';
import Wrapper from './Wrapper';
import Container from './Container';
import { Logo } from './Logo';
import { Menu } from './Menu/Menu';

interface HeaderProps {

}

export const Header: React.SFC<HeaderProps> = (props) => (
    <Wrapper>
        <Container>
            <Logo />
            <Menu />
        </Container>
    </Wrapper>
);