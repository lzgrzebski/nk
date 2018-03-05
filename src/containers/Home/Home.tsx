import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import { fetchData } from './Home.actions';
import { editText, saveText } from '../App/App.actions';
import * as fromHome from './Home.actions';
import * as fromApp from '../App/App.actions';
import * as HomeReducer from './Home.reducer';
import TopContentContainer from '../../components/Home/TopContentContainer';
import TopImageWrapper from '../../components/Home/TopImageWrapper';
import TopWrapper from '../../components/Home/TopWrapper';
import TopHeadline from '../../components/Home/TopHeadline';
import { TextField } from '../TextField/TextField';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../../components/ContentContainer';
import { Headline } from '../../components/Headline';
import { Photo } from '../Photo';

interface HomeProps extends HomeReducer.State {
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
        const { 
            headline,
            headlinePhoto,
            headlineDescription,
            headlineButton,
        
            photoSectionHeadline,
            photoSectionElement1,
            photoSectionElement2,
            photoSectionElement3,
            photoSectionElement4,
            photoSectionMoreButton,

        } = this.props;

        return (
            <React.Fragment>
                <TopContentContainer>
                    <TopWrapper>
                        <TopHeadline>{headline.value}</TopHeadline>
                        <TextField page={PageType.home} id={headlineDescription.id}>
                            {headlineDescription.value}
                        </TextField>
                        <Button><Link to="/attractions">{headlineButton.value}</Link></Button>
                    </TopWrapper>
                    <TopImageWrapper>
                        <Photo path={headlinePhoto.path} ratio={headlinePhoto.height / headlinePhoto.width} />
                    </TopImageWrapper>
                </TopContentContainer>
                <ContentContainer>
                    <Headline>{photoSectionHeadline.value}</Headline>
                </ContentContainer>
                <ContentContainer>
                    <div style={{flex: 2, paddingRight: 20}}>
                        <Photo path={photoSectionElement1.path} />
                    </div>
                    <div style={{flex: 1}}>
                        <Photo ratio={1.2} path={photoSectionElement2.path} />
                    </div>
                </ContentContainer>
                <ContentContainer>
                    <div style={{flex: 1, paddingRight: 20}}>
                        <Photo path={photoSectionElement3.path} />
                    </div>
                    <div style={{flex: 1}}>
                        <Photo path={photoSectionElement4.path} />
                    </div>
                </ContentContainer>
                <ContentContainer center margin="40px auto">
                    <Button invert main><Link to="/gallery/okolica">{photoSectionMoreButton.value}</Link></Button>
                </ContentContainer>
            </React.Fragment>
        );
    }
  
}

function mapStateToProps({ home, app }: State) {
    return {
        headline: home.headline,
        headlinePhoto: home.headlinePhoto,
        headlineDescription: home.headlineDescription,
        headlineButton: home.headlineButton,

        photoSectionHeadline: home.photoSectionHeadline,
        photoSectionElement1: home.photoSectionElement1,
        photoSectionElement2: home.photoSectionElement2,
        photoSectionElement3: home.photoSectionElement3,
        photoSectionElement4: home.photoSectionElement4,
        photoSectionMoreButton: home.photoSectionMoreButton,

        isEditing: app.isEditing,
        editedField: app.editedField
    };
}

export const Home = connect(mapStateToProps, { fetchData, editText, saveText })(HomeContainer);