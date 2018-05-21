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
                if (expense.id === action.id) {
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

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    }
};

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    }
};

const setStartDate = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    }
};

const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
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
        case 'SORT_BY_AMOUNT':
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
};

// Create the Store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
});

// Expenses
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 65500, createdAt: 1000}));
// console.log(expenseOne);

const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 250, createdAt: -1000}));
// console.log(expenseTwo);

// const expenseTwoRemove = store.dispatch(removeExpense({id: expenseTwo.expense.id}));
// console.log(expenseTwoRemove);
//
// const expenseOneBis = store.dispatch(editExpense(expenseOne.expense.id, {amount: 66600}));
// console.log(expenseOneBis);

// // Filters
store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

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
