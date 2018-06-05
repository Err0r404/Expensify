import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup REMOVE EXPENSE action object', () => {
    const action = removeExpense({id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup EDIT EXPENSE action object', () => {
    const action = editExpense('123abc', {note: 'New'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New'}
    });
});

test('Should setup ADD EXPENSE action object', () => {
    const timestamp = Date.now();
    const data = {
        description: 'Lorem ipsum',
        amount: '12345',
        createdAt: timestamp,
        note: 'Lorem ipsum dolor sit amet'
    };
    const action = addExpense(data);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    });
});

test('Should setup ADD EXPENSE action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});
