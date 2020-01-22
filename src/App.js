import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import GetCreditStep1 from './views/GetCreditStep1';
import GetCreditStep2 from './views/GetCreditStep2';
import GetCreditStep3 from './views/GetCreditStep3';
import GetCreditStep4 from './views/GetCreditStep4';
import Layout from './components/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Route path='/1' exact component={GetCreditStep1} />
          <Route path='/2' exact component={GetCreditStep2} />
          <Route path='/3' exact component={GetCreditStep3} />
          <Route path='/4' exact component={GetCreditStep4} />
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
