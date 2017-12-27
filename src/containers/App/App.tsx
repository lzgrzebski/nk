import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from  '../Home';
import { Header } from '../../components/Header';
import { Attractions } from '../Attractions';

interface AppProps {
}

export class App extends React.Component<AppProps> {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/attractions" component={Attractions} />
        </Switch>
      </main>
    );
  }
}