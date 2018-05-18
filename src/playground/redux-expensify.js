import {createStore, combineReducers} from 'redux';

// Expenses Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters : filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [
        {
            id: '1234657980',
            description: 'May rent',
            note: 'Rent for main address',
            amount: '65000',
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // Can be 'date' or 'amount'
        startDate: undefined,
        endDate: undefined
    }
};

