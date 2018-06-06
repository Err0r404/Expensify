import moment from "moment/moment";

import filtersReducer from '../../reducers/filters';

test('Should setup default filter value', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('Should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
});

test('Should setup sortBy to date', () => {
    // Because default state is already date we need to set it to amount before test it
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});

    expect(state.sortBy).toBe('date');
});

test('Should setup setText filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Something'});

    expect(state.text).toBe('Something');
});

test('Should setup startDate filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});

    expect(state.startDate).toBe(startDate);
});

test('Should setup endDate filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});

    expect(state.endDate).toEqual(endDate);
});
