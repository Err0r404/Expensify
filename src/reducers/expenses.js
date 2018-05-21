// Expenses Reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
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

export default expensesReducer;