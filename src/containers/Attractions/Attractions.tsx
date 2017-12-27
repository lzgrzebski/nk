import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store/reducers';
import Headline from '../../components/Headline/Headline';
import { ContentContainer } from '../../components/ContentContainer';
import { AttractionItem } from '../../components/AttractionItem/AttractionItem';
import { AttractionSmallItem } from '../../components/AttractionSmallItem';
import { Button } from '../../components/Button';

interface AttractionsProps {

}

class AttractionsContainer extends React.Component<AttractionsProps> {

    render() {
        return (
        <div>
            <ContentContainer>
                <Headline>Atrakcje</Headline>
            </ContentContainer>
            <ContentContainer direction="column">
                <AttractionItem />
                <AttractionItem />
                <AttractionItem />
            </ContentContainer>
            <ContentContainer>
                <Headline>Inne ciekawe miejsca w okolicy</Headline>
            </ContentContainer>
            <ContentContainer>
                <AttractionSmallItem />
                <AttractionSmallItem />
                <AttractionSmallItem />
                <AttractionSmallItem />
            </ContentContainer>
            <ContentContainer center margin="40px auto">
                <Button invert main>
                    <a
                        href="https://www.google.com/maps/d/embed?mid=1MY6YyhpPiSo3c4d72yMiaOtkkew&hl=pl"
                        target="_blank"
                    >
                        Zobacz na mapie
                    </a>
                </Button>
            </ContentContainer>
            {/* <iframe
                src="https://www.google.com/maps/d/embed?mid=1MY6YyhpPiSo3c4d72yMiaOtkkew&hl=pl"
                width="100%"
                height="600"
            /> */}
        </div>);
    }
}

function mapStateToProps(state: State) {
    return {

    };
}

export const Attractions = connect(mapStateToProps, {  })(AttractionsContainer);