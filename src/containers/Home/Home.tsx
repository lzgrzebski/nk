import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import { fetchData } from './Home.actions';
import { editText, saveText } from '../App/App.actions';
import * as fromHome from './Home.actions';
import * as fromApp from '../App/App.actions';
import { Text } from './Home.reducer';
import TopContentContainer from '../../components/Home/TopContentContainer';
import TopImageWrapper from '../../components/Home/TopImageWrapper';
import TopWrapper from '../../components/Home/TopWrapper';
import TopHeadline from '../../components/Home/TopHeadline';
import { TextField } from '../TextField/TextField';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

interface HomeProps {
    headline: Text;
    isEditing: boolean;
    editedField: string;
    fetchData: () => fromHome.FetchDataAction;
    editText: (editedPage: string, editedField: string) => fromApp.EditTextAction;
    saveText: (editedPage: string, editedField: string, changedText: string) => fromApp.SaveTextAction;
}
  
class HomeContainer extends React.Component<HomeProps> {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { headline } = this.props;
        return (
            <TopContentContainer>
                <TopWrapper>
                    <TopHeadline>Krzywczyce</TopHeadline>
                    <TextField page={PageType.home} id={headline.id}>
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                        Wieś w Polsce, w województwie lubuskim, w powiecie żagańskim, w gminie Niegosławice.
                        W latach 1975–1998 miejscowość administracyjnie należała do województwa zielonogórskiego.
                    </TextField>
                    <Button><Link to="/attractions">Zobacz lokalne atrakcje</Link></Button>
                </TopWrapper>
                <TopImageWrapper>
                    <img src="/photos/top.png" />
                </TopImageWrapper>

            </TopContentContainer>
        );
    }
  
}

function mapStateToProps(state: State) {
    return {
        headline: state.home.headline,
        isEditing: state.app.isEditing,
        editedField: state.app.editedField
    };
}

export const Home = connect(mapStateToProps, { fetchData, editText, saveText })(HomeContainer);