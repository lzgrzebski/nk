import * as React from 'react';
import AttractionItemWrapper from './AttractionItemWrapper';
import { Button } from '../Button';
import { TextField } from '../../containers/TextField';
import AttractionItemPhoto from './AttractionItemPhoto';
import { Photo } from '../../containers/Photo';
import { PageType } from '../../store/reducers';

interface AttractionItemProps {

}

export const AttractionItem: React.SFC<AttractionItemProps> = (props) => (
    <AttractionItemWrapper>
        <AttractionItemPhoto>
            <Photo />
        </AttractionItemPhoto>
        <div>
            <TextField bold padding="0" page={PageType.home} id="asd">
                What is Lorem Ipsum?
            </TextField>
            <TextField padding="0" page={PageType.home} id="asd">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </TextField>
            <Button>Więcej informacji</Button>
        </div>
    </AttractionItemWrapper>
);

export default AttractionItem;