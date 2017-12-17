import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store/reducers';
import { fetchData, editText, saveText } from './Home.actions';
import { ContentContainer } from '../../components/ContentContainer';

interface HomeProps {
    headline: string;
    isEditing: boolean;
    editedField: string;
    // tslint:disable-next-line:no-any
    fetchData: () => any;
    // tslint:disable-next-line:no-any
    editText: (id: any) => any;
    // tslint:disable-next-line:no-any
    saveText: (id: any, changedText: string) => any;
}
  
class HomeContainer extends React.Component<HomeProps> {

    componentDidMount() {
        this.props.fetchData();
    }

    // tslint:disable-next-line:no-any
    handleBlur = (e: any) => {
        this.props.saveText('headline', e.target.value);
    }

    render() {
        return (
            <ContentContainer>
                {!this.props.isEditing ? (
                    <div onClick={() => this.props.editText('headline')}>                
                        {this.props.headline}
                    </div>
                ) :
                (
                    <textarea
                        autoFocus
                        defaultValue={this.props.headline}
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
        isEditing: state.home.isEditing,
        editedField: state.home.editedField
    };
}

const Home = connect(mapStateToProps, { fetchData, editText, saveText })(HomeContainer);
export { Home };