import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        fdfdf
      </div>
    </Provider>
  );
}

export default App;
