import moment from 'moment'

import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters'

test('Should setup SET_START_DATE action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should setup SET_END_DATE action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should setup SORT_BY_AMOUNT action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('Should setup SORT_BY_DATE action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('Should setup SET_TEXT_FILTER action object with text', () => {
    const action = setTextFilter('Anything');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Anything'
    });
});

test('Should setup SET_TEXT_FILTER action object without text', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
