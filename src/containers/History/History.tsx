import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import Headline from '../../components/Headline/Headline';
import { ContentContainer } from '../../components/ContentContainer';
import { TextField } from '../TextField/TextField';
import TextWrapper from './TextWrapper';
import ImageWrapper from './ImageWrapper';
import { Photo } from '../Photo';

interface HistoryProps {

}

class HistoryContainer extends React.Component<HistoryProps> {

    render() {
        return (
        <React.Fragment>
            <ContentContainer>
                <Headline>Historia</Headline>
            </ContentContainer>
            <ContentContainer direction="column">
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="0 0 25px">
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="25px 0">
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
            </ContentContainer>
        </React.Fragment>);
    }
}

function mapStateToProps(state: State) {
    return {

    };
}

export const History = connect(mapStateToProps, {  })(HistoryContainer);