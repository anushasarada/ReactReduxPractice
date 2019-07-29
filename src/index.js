import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import getStore from './store/getStore'
import { ProfileFormContainer } from './containers/ProfileForm'
import { Provider } from 'react-redux'
import { CounterContainer } from './containers/Counter';

const store = getStore();

//any descedent of CounterContainer will be able to access store, so that exporting store is not necessary
ReactDOM.render(
    <Provider store={store}>
      <ProfileFormContainer />
      <CounterContainer/>
    </Provider>,
    document.getElementById('root'));