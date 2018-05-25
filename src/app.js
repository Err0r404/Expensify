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

store.dispatch(addExpense({description: 'Water bill', note: '', amount: 3000}));
store.dispatch(addExpense({description: 'Gas bill', note: '', amount: 0}));
console.log('Added 2', store.getState());

store.dispatch(setTextFilter('bill'));
console.log('Filter bill', getVisibleExpenses(store.getState().expenses, store.getState().filters));

store.dispatch(setTextFilter('water'));
console.log('Filter water', getVisibleExpenses(store.getState().expenses, store.getState().filters));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

// ReactDOM.render(<AppRouter/>, document.getElementById('app'));
