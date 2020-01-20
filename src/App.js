import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import GetCreditStep1 from './views/GetCreditStep1';
import GetCreditStep2 from './views/GetCreditStep2';
import GetCreditStep3 from './views/GetCreditStep3';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={GetCreditStep1} />
        <Route path='/2' exact component={GetCreditStep2} />
        <Route path='/3' exact component={GetCreditStep3} />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
