import * as React from 'react';
import AttractionItemWrapper from './AttractionItemWrapper';
import { Button } from '../Button';
import { TextField } from '../../containers/TextField';
import AttractionItemPhoto from './AttractionItemPhoto';
import { Photo } from '../../containers/Photo';
import { PageType } from '../../store/reducers';

interface AttractionItemProps {
    title: string;
    image: string;
    description?: string;
}

const AttractionItem: React.SFC<AttractionItemProps> = ({title, description, image}) => (
    <AttractionItemWrapper>
        <AttractionItemPhoto>
            <Photo
                path={image}
                ratio={270 / 450}
            />
        </AttractionItemPhoto>
        <div>
            <TextField bold padding="0" margin="-2px 0 0 0" page={PageType.home} id="asd">
                {title}
            </TextField>
            <TextField padding="0" page={PageType.home} id="asd">
                {description}
            </TextField>
            <Button>Więcej informacji</Button>
        </div>
    </AttractionItemWrapper>
);

AttractionItem.defaultProps = {
    description: ''
};

// tslint:disable-next-line:align
export { AttractionItem };

export default AttractionItem;