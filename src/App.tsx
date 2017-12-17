import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from  './containers/Home';
import { Header } from './components/Header';
import { Attractions } from './containers/Attractions';

interface AppProps {
}

export default class App extends React.Component<AppProps> {
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
