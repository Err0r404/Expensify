import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should setup default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('Should add expense', () => {
    const expense = {
        id: '123abc',
        description: 'Something',
        amount: 100,
        note: '',
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test('Should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            id: '1',
            description: 'Gum',
            amount: 200,
            note: '',
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([action.updates, expenses[1], expenses[2]]);
});

test('Should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            id: '123abc',
            description: 'Gum',
            amount: 200,
            note: '',
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});
