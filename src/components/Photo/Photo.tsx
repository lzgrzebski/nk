import * as React from 'react';
import PhotoWrapper from './PhotoWrapper';

interface PhotoProps {
    ratio?: number;
}

export const Photo: React.SFC<PhotoProps> = (props) => (
    <PhotoWrapper ratio={props.ratio} />
);