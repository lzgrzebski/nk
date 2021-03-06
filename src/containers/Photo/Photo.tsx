import * as React from 'react';
import PhotoWrapper from './PhotoWrapper';
import PhotoElement from './PhotoElement';

interface PhotoProps {
    ratio?: number;
    path?: string;
}

interface PhotoState {
    loaded: boolean;
}

export class Photo extends React.Component<PhotoProps, PhotoState> {

    state = {
        loaded: false,
    };
 
    handleLoad = () => {
        this.setState({ loaded: true });
    }

    render() {
        const basename = process.env.PUBLIC_URL || '';
        return (
            <PhotoWrapper ratio={this.props.ratio}>
            { this.props.path && (
                <PhotoElement
                    src={basename + this.props.path}
                    onLoad={this.handleLoad}
                    loaded={this.state.loaded}
                />
            )}
            </PhotoWrapper>
        );
    }
}
