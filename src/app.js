// yarn run dev-server

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import './styles/styles.scss';

const store = configureStore();
console.log('Init', store.getState());

store.dispatch(addExpense({description: 'Water bill', note: '', amount: 0, createdAt:1526203225000}));
store.dispatch(addExpense({description: 'Gas bill', note: '', amount: 0, createdAt: 1526030425000}));
store.dispatch(addExpense({description: 'Rent', note: '', amount: 66000, createdAt: 1526116825000}));
console.log('Added 3', store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

// ReactDOM.render(<AppRouter/>, document.getElementById('app'));
