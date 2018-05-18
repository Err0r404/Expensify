import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Actions
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    }
};

const removeExpense = ({id} = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

// Expenses Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => action.id !== expense.id);
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
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 65500}));
console.log(expenseOne);

const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 250}));
console.log(expenseTwo);

const expenseTwoRemove = store.dispatch(removeExpense({id: expenseTwo.expense.id}));
console.log(expenseTwoRemove);

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

