import * as React from 'react';
import { connect } from 'react-redux';
import { PageType, State } from '../../store/reducers';
import Headline from '../../components/Headline/Headline';
import { ContentContainer } from '../../components/ContentContainer';
import { TextField } from '../TextField/TextField';
import TextWrapper from './TextWrapper';
import ImageWrapper from './ImageWrapper';
import { Photo } from '../Photo';

interface HistoryProps {

}

class HistoryContainer extends React.Component<HistoryProps> {

    render() {
        return (
        <React.Fragment>
            <ContentContainer>
                <Headline>Historia</Headline>
            </ContentContainer>
            <ContentContainer direction="column">
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="0 0 25px">
                        Krzywczyce. „Niewielka regularna osada powstała dość późno, bo dopiero w XVIII wieku, co
                        świadczy na tym obszarze na korzyść przewagi występujących sił przyrody nad zakusami
                        gospodarczymi człowieka. Jako teren trudno przystępny z racji otaczających wód, ponadto o
                        przewadze piaszczystych gleb bielicowych, raczej nie zachęcał do osadnictwa. Założył ją w
                        1770 roku starosta Eckartsberg z sąsiedniej Suchej Dolnej, stąd dawna nazwa wsi
                        Eckartswaldau.
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="25px 0">
                        Końcówka „-waldau” od niemieckiego „Wald” = las potwierdza, że wieś została wydarta
                        pradawnej dolnośląskiej puszczy. Ale pewna okoliczność świadczy o starszej penetracji tego
                        terenu przez ludzi. Mianowicie historyczne mapy ukazują przechodzącą przez naszą
                        krzywczycką wyspę Drogę Solną. Wiodła ona zapewne od składów solnych w Nowej Soli w
                        kierunku Bolesławca i dalej na południe. Kiedy Krzywczyc jeszcze nie było, istniał tu most,
                        którego otoczenie nazywało się „nad zniszczonym mostem”.
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="25px 0">
                        Bardzo intrygującym jest pewne znalezisko archeologiczne z Krzywczyc przemawiające za
                        hipotezą, że naturalnie chroniona wodami wyspa mogła stanowić schronienie dla ludzi lub
                        przejściowe obozowisko już w czasach epoki kamienia. Mowa o głowicy topora bojowego
                        znalezionego na terenie miejscowej szkółki leśnej, datowanej na okres neolitu, tj. młodszej
                        epoki kamienia. Prymitywnie wykończona lub nadniszczona głowica jest obecnie
                        przechowywana w Muzeum Ziemi Szprotawskiej i stanowi jeden z najcenniejszych
                        eksponatów tej instytucji.”
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="25px 0">
                        {`Przytoczony , obszerny cytat został w całości zaczerpnięty z artykułu: Maciej Boryna
                        „Krzywczyce. Obozowisko starożytnych myśliwych?” (źródło:
                        http://borynam.wixsite.com/borydolnoslaskie/krzywczyce-- -staroytne- obozowisko).<br/> <br/>
                        
                        Powojennemu ustalaniu polskich nazw miejscowości na ziemiach wcześniej należących do
                        Rzeszy Niemieckiej towarzyszył spory chaos. Eckartswaldau (czasem spotykana forma
                        pisowni Eckertswaldau) mimo pochodzenia od niemieckiego nazwiska, można próbować
                        tłumaczyć bezpośrednio. „Ecke” oznacza kąt, róg lub zakątek, a „wald”, jak wcześniej
                        podano, to las. W dużym uproszczeniu Krzywy Las? Jeśli tak, to pojawia się wyraźny
                        związek z przedwojennymi Krzywczycami w województwie lwowskim, których miano
                        historycy wywodzą od lasu na okolicznych wzniesieniach tzw. Krzywego Lasu.`}
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="25px 0">
                        Niestety obecnie okoliczne zabytki popadają w ruinę. Wspomniany wcześniej pałac w Suchej
                        Dolnej przetrwał zawieruchę wojenną i okres zarządzania PGR. Niestety po sprzedaży
                        prywatnemu właścicielowi, który zdemontował dach, budynek niszczeje w błyskawicznym
                        tempie.
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="25px 0">
                        Nie lepszy los spotkał miejscowe cmentarze. Dziś to tylko cień dawnej świetności. Jedyną
                        zaletę stanowi fakt, że można tu usiąść pod zdziczałymi drzewami i pogrążyć się w zadumie.
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <br />
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>
                <TextWrapper>
                    <TextField page={PageType.home} id="blabla" padding="25px 0">
                        Niektórych zabytków nie da się już uratować. Jednak optymizmem napawa, że coraz liczniej
                        pojawiają się ludzie i organizacje, które dbają o zachowanie pamięci o przeszłych czasach.
                    </TextField>
                </TextWrapper>
                <ImageWrapper>
                    <Photo />
                </ImageWrapper>                  
            </ContentContainer>
        </React.Fragment>);
    }
}

function mapStateToProps(state: State) {
    return {

    };
}

export const History = connect(mapStateToProps, {  })(HistoryContainer);