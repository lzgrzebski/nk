import { PageType } from '../../store/reducers';
import * as React from 'react';
import { Photo } from '../Photo/Photo';
import AttractionItemSmallWrapper from './AttractionItemSmallWrapper';
import { TextField } from '../../containers/TextField';

interface AttractionItemProps {

}

export const AttractionSmallItem: React.SFC<AttractionItemProps> = (props) => (
    <AttractionItemSmallWrapper>
        <Photo />
        <TextField page={PageType.home} id="asd">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </TextField>
    </AttractionItemSmallWrapper>
);

export default AttractionSmallItem;