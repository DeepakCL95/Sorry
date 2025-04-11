import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <Provider store={store}>
      <PageContainer />
    </Provider>
  );
}

export default App;