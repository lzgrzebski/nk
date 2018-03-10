import * as React from 'react';
import { connect } from 'react-redux';

import { GalleryTabs } from './GalleryTabs';
import { State } from '../../store/reducers';
import Headline from '../../components/Headline/Headline';
import Container from '../../components/Header/Container';
import GalleryGrid from './GalleryGrid';
import { Photo } from '../Photo';
import GalleryItem from './GalleryItem';

import * as GalleryReducer from './Gallery.reducer';
import { GalleryCategoryItem } from './Gallery.reducer';
import * as fromGallery from './Gallery.actions';
import { RouteComponentProps } from 'react-router';
import { fetchData } from './Gallery.actions';
import { ContentContainer } from '../../components/ContentContainer';
import { SubHeadline } from '../../components/SubHeadline';

interface GalleryProps extends GalleryReducer.State, RouteComponentProps<{ category: string }> {
    fetchData: () => fromGallery.FetchDataAction;
}

class GalleryContainer extends React.Component<GalleryProps> {

    componentDidMount() {
        this.props.fetchData();
    }    

    render() {
        const categoryItems = this.props[this.props.match.params.category || 'okolica'];
        return (
        <React.Fragment>
            <Container>
                <Headline>Galeria</Headline>
                <GalleryTabs />
            </Container>
            {categoryItems && (
                categoryItems.map((categoryItem: GalleryCategoryItem) => (
                    <React.Fragment key={categoryItem.name}>
                        {categoryItem.name && (
                            <ContentContainer>
                                <SubHeadline>{categoryItem.name}</SubHeadline>
                            </ContentContainer>
                        )}
                        <GalleryGrid>
                            { categoryItem.photos.map(photo => (
                                <GalleryItem key={photo.id}>
                                    <Photo
                                        path={photo.path}
                                        ratio={photo.height / photo.width}
                                    />
                                </GalleryItem>                                
                            ))}
                        </GalleryGrid>
                    </React.Fragment>
                ))
            )}
        </React.Fragment>);
    }
}

function mapStateToProps({ gallery }: State) {
    return {
        ...gallery
    };
}

export const Gallery = connect(mapStateToProps, { fetchData })(GalleryContainer);