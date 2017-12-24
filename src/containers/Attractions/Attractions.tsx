import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store/reducers';

interface AttractionsProps {

}

class AttractionsContainer extends React.Component<AttractionsProps> {

    render() {
        return (
        <div>
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1MY6YyhpPiSo3c4d72yMiaOtkkew&hl=pl"
                width="100%"
                height="600"
            />
        </div>);
    }
}

function mapStateToProps(state: State) {
    return {

    };
}

export const Attractions = connect(mapStateToProps, {  })(AttractionsContainer);