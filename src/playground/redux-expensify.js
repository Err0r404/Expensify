import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Expenses Actions
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

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    // Merge expense and updates and return it
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filters Actions
const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
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

// Expenses
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 65500}));
console.log(expenseOne);

const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 250}));
console.log(expenseTwo);

const expenseTwoRemove = store.dispatch(removeExpense({id: expenseTwo.expense.id}));
console.log(expenseTwoRemove);

const expenseOneBis = store.dispatch(editExpense(expenseOne.expense.id, {amount: 66600}));
console.log(expenseOneBis);

// Filters
store.dispatch(setTextFilter('food'));
store.dispatch(setTextFilter());

/*
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
*/
