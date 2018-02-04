import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from  '../Home';
import { Header } from '../../components/Header';
import { Attractions } from '../Attractions';
import { Footer } from '../../components/Footer';
import { History } from '../History';
import { Gallery } from '../Gallery';
import { Contact } from '../Contact';

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
          <Route exact path="/history" component={History} />   
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </main>
    );
  }
}