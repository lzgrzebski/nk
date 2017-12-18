import * as React from 'react';
import { connect } from 'react-redux';
import { State, PageType } from '../../store/reducers';
import { fetchData } from './Home.actions';
import { editText, saveText } from '../App/App.actions';
import { ContentContainer } from '../../components/ContentContainer';
import { Text } from './Home.reducer';

interface HomeProps {
    headline: Text;
    isEditing: boolean;
    editedField: string;
    // tslint:disable-next-line:no-any
    fetchData: () => any;
    // tslint:disable-next-line:no-any
    editText: (editedPage: any, editedField: any) => any;
    // tslint:disable-next-line:no-any
    saveText: (editedPage: any, editedField: any, changedText: string) => any;
}
  
class HomeContainer extends React.Component<HomeProps> {

    componentDidMount() {
        this.props.fetchData();
    }

    // tslint:disable-next-line:no-any
    handleBlur = (e: any) => {
        this.props.saveText(PageType.home, this.props.headline.key, e.target.value);
    }

    render() {
        return (
            <ContentContainer>
                {!this.props.isEditing ? (
                    <div onClick={() => this.props.editText(PageType.home, this.props.headline.key)}>                
                        {this.props.headline.value}
                    </div>
                ) :
                (
                    <textarea
                        autoFocus
                        defaultValue={this.props.headline.value}
                        onBlur={this.handleBlur}
                    />
                ) }
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