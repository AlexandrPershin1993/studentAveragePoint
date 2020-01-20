import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import GetCreditStep1 from './views/GetCreditStep1';
import GetCreditStep2 from './views/GetCreditStep2';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={GetCreditStep1} />
        <Route path='/2' exact component={GetCreditStep2} />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
