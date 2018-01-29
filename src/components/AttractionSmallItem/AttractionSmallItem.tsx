import { PageType } from '../../store/reducers';
import * as React from 'react';
import { Photo } from '../../containers/Photo';
import AttractionItemSmallWrapper from './AttractionItemSmallWrapper';
import { TextField } from '../../containers/TextField';

interface AttractionItemProps {
    title: string;
}

export const AttractionSmallItem: React.SFC<AttractionItemProps> = ({title}) => (
    <AttractionItemSmallWrapper>
        <Photo />
        <TextField page={PageType.home} id="asd">
            {title}
        </TextField>
    </AttractionItemSmallWrapper>
);

export default AttractionSmallItem;