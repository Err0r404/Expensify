import { createStore, combineReducers } from 'redux';

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

