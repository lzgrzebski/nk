import { GalleryTabs } from './GalleryTabs';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store/reducers';
import Headline from '../../components/Headline/Headline';
import Container from '../../components/Header/Container';
import GalleryGrid from './GalleryGrid';
import { Photo } from '../Photo';
import GalleryItem from './GalleryItem';

interface GalleryProps {

}

class GalleryContainer extends React.Component<GalleryProps> {

    render() {
        return (
        <React.Fragment>
            <Container>
                <Headline>Galeria</Headline>
                <GalleryTabs />
            </Container>
            <GalleryGrid>
                <GalleryItem>
                    <Photo />
                </GalleryItem>
                <GalleryItem>
                    <Photo />
                </GalleryItem>
                <GalleryItem>
                    <Photo />
                </GalleryItem>
                <GalleryItem>
                    <Photo />
                </GalleryItem>
            </GalleryGrid>
        </React.Fragment>);
    }
}

function mapStateToProps(state: State) {
    return {

    };
}

export const Gallery = connect(mapStateToProps, {  })(GalleryContainer);