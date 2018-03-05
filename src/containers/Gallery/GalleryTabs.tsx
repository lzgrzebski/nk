import * as React from 'react';
import { NavLink } from 'react-router-dom';
import GalleryTabItem from './GalleryTabItem';
import GalleryTabsWrapper from './GalleryTabsWrapper';

interface GalleryTabsProps {

}

const links = [
    { name: 'Okolica', path: '/gallery' },
    { name: 'Przyroda', path: '/gallery/przyroda' },
    { name: 'Konie', path: '/gallery/konie' },
    { name: 'W obiektywie', path: '/gallery/wobiektywie' }
];
export const GalleryTabs: React.SFC<GalleryTabsProps> = (props) => (
    <GalleryTabsWrapper>
        {
            links.map(link => (
                <GalleryTabItem key={link.path}>
                    <NavLink to={link.path} exact activeClassName="active">{link.name}</NavLink>
                </GalleryTabItem>
            ))
        }
    </GalleryTabsWrapper>
);