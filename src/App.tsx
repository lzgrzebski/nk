import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from  './containers/Home';

interface AppProps {
}

export default class App extends React.Component<AppProps> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}
