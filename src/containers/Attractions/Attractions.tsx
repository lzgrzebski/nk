import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import { fetchData } from './Attractions.actions';
import * as fromAttractions from './Attractions.actions';
import * as AttractionsReducer from './Attractions.reducer';
import Headline from '../../components/Headline/Headline';
import { ContentContainer } from '../../components/ContentContainer';
import { AttractionItem } from '../../components/AttractionItem/AttractionItem';
import { AttractionSmallItem } from '../../components/AttractionSmallItem';
import { Button } from '../../components/Button';
import { TextField } from '../TextField/TextField';
import TextWrapper from '../History/TextWrapper';
import { List, ListItem } from '../../components/List';

interface AttractionsProps extends AttractionsReducer.State {
    fetchData: () => fromAttractions.FetchDataAction;
}

class AttractionsContainer extends React.Component<AttractionsProps> {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { attractions, plans, otherAttractionsTitle, otherAttractions } = this.props;
        return (
        <React.Fragment>
            <ContentContainer>
                <Headline>Atrakcje</Headline>
            </ContentContainer>
            <ContentContainer direction="column">
                {attractions.map(attraction => <AttractionItem key={attraction.title} {...attraction} />)}
            </ContentContainer>
            <ContentContainer>
                <Headline>{plans.title}</Headline>
            </ContentContainer>
            <ContentContainer>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="0 0 10px">
                        {plans.description}
                    </TextField>
                    <List>
                        {plans.points.map(point => <ListItem key={point}>{point}</ListItem>)}
                    </List>
                </TextWrapper>
            </ContentContainer>
            <ContentContainer>
                <Headline>{otherAttractionsTitle}</Headline>
            </ContentContainer>
            <ContentContainer>
                {otherAttractions.slice(0, 4).map(attraction => (
                    <AttractionSmallItem key={attraction.title} {...attraction} />
                ))}
            </ContentContainer>
            <ContentContainer>
                {otherAttractions.slice(4, 8).map(attraction => (
                    <AttractionSmallItem key={attraction.title} {...attraction} />
                ))}
            </ContentContainer>
            <ContentContainer>
                {otherAttractions.slice(8, 12).map(attraction => (
                    <AttractionSmallItem key={attraction.title} {...attraction} />
                ))}
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
        </React.Fragment>);
    }
}

function mapStateToProps({ attractions }: State) {
    return {
        ...attractions
    };
}

export const Attractions = connect(mapStateToProps, { fetchData })(AttractionsContainer);