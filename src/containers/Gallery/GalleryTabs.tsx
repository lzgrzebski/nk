import * as React from 'react';
import { NavLink } from 'react-router-dom';
import GalleryTabItem from './GalleryTabItem';
import GalleryTabsWrapper from './GalleryTabsWrapper';

interface GalleryTabsProps {

}

const links = [
    { name: 'Okolica', path: '/gallery' },
    { name: 'Przyroda', path: '/a1' },
    { name: 'Konie', path: '/a2' },
    { name: 'W obiektywie', path: '/a3' }
];
export const GalleryTabs: React.SFC<GalleryTabsProps> = (props) => (
    <GalleryTabsWrapper>
        {
            links.map(link => (
                <GalleryTabItem key={link.path}>
                    <NavLink to={link.path} activeClassName="active">{link.name}</NavLink>
                </GalleryTabItem>
            ))
        }
    </GalleryTabsWrapper>
);