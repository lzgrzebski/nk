import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store/reducers';
import { fetchData } from './Home.actions';

interface HomeProps {
    elements: string[];
    // tslint:disable-next-line:no-any
    fetchData: () => any;
}
  
class HomeContainer extends React.Component<HomeProps> {

    componentDidMount() {
        this.props.fetchData();
      }

    render() {
        return (
            <div>
        {this.props.elements && this.props.elements.map(element => <div key={element}>{element}</div>)}
      </div>
        );
    }
  
}

function mapStateToProps(state: State) {
    return {
        elements: state.home.elements
    };
}

const Home = connect(mapStateToProps, { fetchData })(HomeContainer);
export { Home };