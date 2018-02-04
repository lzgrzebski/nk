import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import * as fromHistory from './History.actions';
import { fetchData } from './History.actions';
import * as HistoryReducer from './History.reducer';
import Headline from '../../components/Headline/Headline';
import { ContentContainer } from '../../components/ContentContainer';
import { TextField } from '../TextField/TextField';
import TextWrapper from './TextWrapper';
import ImageWrapper from './ImageWrapper';
import { Photo } from '../Photo';

interface HistoryProps extends HistoryReducer.State {
    fetchData: () => fromHistory.FetchDataAction;
}

class HistoryContainer extends React.Component<HistoryProps> {

    componentDidMount() {
        this.props.fetchData();
    }   

    render() {
        const { historyArray } = this.props;

        return (
        <React.Fragment>
            <ContentContainer>
                <Headline>Historia</Headline>
            </ContentContainer>
            <ContentContainer direction="column">
                {historyArray && historyArray.map((historyItem, i) => {
                    switch (historyItem.type) {
                        case 'text':
                            return (
                                <TextWrapper key={i}>
                                    <TextField
                                        page={PageType.history}
                                        id={historyItem.id}
                                        padding={i > 0 ? '25px 0' : '0 0 25px'}
                                    >
                                        {historyItem.value}
                                    </TextField>
                                </TextWrapper>
                            );
                        case 'photo':
                            return (
                                <ImageWrapper key={i}>
                                    <Photo
                                        path={historyItem.path}
                                        ratio={historyItem.height / historyItem.width}
                                    />
                                </ImageWrapper>
                            );
                        default:
                            return <br key={i} />;
                    }
                })}
            </ContentContainer>
        </React.Fragment>);
    }
}

function mapStateToProps({history: {historyArray}}: State) {
    return {
        historyArray
    };
}

export const History = connect(mapStateToProps, { fetchData })(HistoryContainer);