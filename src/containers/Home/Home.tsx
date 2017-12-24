import * as React from 'react';
import { connect } from 'react-redux';
import { State, PageType } from '../../store/reducers';
import { fetchData } from './Home.actions';
import { editText, saveText } from '../App/App.actions';
import { ContentContainer } from '../../components/ContentContainer';
import * as fromHome from './Home.actions';
import * as fromApp from '../App/App.actions';
import { Text } from './Home.reducer';
import { TextField } from '../TextField/TextField';

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
            <ContentContainer>
                <TextField page={PageType.home} id={headline.id}>
                    {headline.value}
                </TextField>
            </ContentContainer>
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