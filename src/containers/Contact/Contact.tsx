import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import Headline from '../../components/Headline/Headline';
import { Photo } from '../Photo';
import { ContentContainer } from '../../components/ContentContainer';
import ContactContent from './ContactContent';
import ContactMap from './ContactMap';
import { TextField } from '../TextField/TextField';
import ContactWrapper from './ContactWrapper';

interface ContactProps {

}

class ContactContainer extends React.Component<ContactProps> {

    render() {
        return (
        <React.Fragment>
            <ContentContainer>
                <Headline>Kontakt</Headline>
            </ContentContainer>
            <ContactWrapper>
                <ContactContent>
                    <TextField padding="0" page={PageType.home} id="asd">
                        Strona prowadzona przez Stowarzyszenie "Nasze Krzywczyce".<br />
                        tel. 721-721-721<br />
                        email: email[at]email.pl<br />
                    </TextField>
                </ContactContent>
                <ContactMap>
                    <Photo />
                </ContactMap>
            </ContactWrapper>
        </React.Fragment>);
    }
}

function mapStateToProps(state: State) {
    return {

    };
}

export const Contact = connect(mapStateToProps, {  })(ContactContainer);