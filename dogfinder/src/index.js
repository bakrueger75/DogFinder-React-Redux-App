import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
import { loadBreedList, loadAllBreeds } from './actions/dogFinderActions';

const store = configureStore();
store.dispatch(loadBreedList());
store.dispatch(loadAllBreeds());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
);
