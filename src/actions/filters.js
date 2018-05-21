// Filters Actions
export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    }
};

export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    }
};

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    }
};

export const setStartDate = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    }
};

export const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
    }
};
