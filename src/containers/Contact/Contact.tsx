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
import { FooterSocial } from '../../components/Footer/FooterSocial/FooterSocial';
import ContactSocialWrapper from './ContactSocialWrapper';

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
                        {`
                            Strona prowadzona przez Stowarzyszenie <b>Nasze Krzywczyce</b><br />
                            e-mail: <a href="mailto:nasze.krzywczyce@.o2.pl">nasze.krzywczyce@.o2.pl</a>
                        `}
                    </TextField>
                    <ContactSocialWrapper>
                        <FooterSocial />
                    </ContactSocialWrapper>
                </ContactContent>
                <ContactMap>
                    <Photo path="/photos/contact/1.jpg" ratio={405 / 608} />
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