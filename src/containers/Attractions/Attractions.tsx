import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import Headline from '../../components/Headline/Headline';
import { ContentContainer } from '../../components/ContentContainer';
import { AttractionItem } from '../../components/AttractionItem/AttractionItem';
import { AttractionSmallItem } from '../../components/AttractionSmallItem';
import { Button } from '../../components/Button';
import { TextField } from '../TextField/TextField';
import TextWrapper from '../History/TextWrapper';

interface AttractionsProps {

}

class AttractionsContainer extends React.Component<AttractionsProps> {

    render() {
        return (
        <React.Fragment>
            <ContentContainer>
                <Headline>Atrakcje</Headline>
            </ContentContainer>
            <ContentContainer direction="column">
                <AttractionItem title="Leśna stadnina" />
                <AttractionItem title="Warsztat ebenistyczny" />
                <AttractionItem title="Pominiki przyrody" />
            </ContentContainer>
            <ContentContainer>
                <Headline>Plany</Headline>
            </ContentContainer>
            <ContentContainer>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="0 0 25px">
                        Enklawa Turystyczna UROCZYSKO KRZYWCZYCE w celu
                        uatrakcyjnienia oferty dla turystyki, rekreacji i wypoczynku chce podjąć następujące działania
                        rozwojowe: zbiornik retencyjny, rozwój bazy noclegowej, powstanie schroniska w budynku
                        szkoły, przystań kajakowa z miejscem do biwakowania, ochrona przyrody, elementy małej
                        architektury.
                    </TextField>
                </TextWrapper>
            </ContentContainer>
            <ContentContainer>
                <Headline>Inne ciekawe miejsca w okolicy</Headline>
            </ContentContainer>
            <ContentContainer>
                <AttractionSmallItem title="Pałac Wiechlice" />
                <AttractionSmallItem title="Dąb Chrobry" />
                <AttractionSmallItem title="Rezerwat Buczyna Szprotawska" />
                <AttractionSmallItem title="Przemkowski Park Krajobrazowy" />
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
        </React.Fragment>);
    }
}

function mapStateToProps(state: State) {
    return {

    };
}

export const Attractions = connect(mapStateToProps, {  })(AttractionsContainer);