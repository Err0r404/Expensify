import {createStore} from 'redux';

// Destructure param and set default value
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
};

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
};

const resetCount = () => {
    return {
        type: 'RESET'
    }
};

const setCount = ({count = 1} = {}) => {
    return {
        type: 'SET',
        count: count
    }
};

// Reducers
// Sould be "pure function" (doesn't depend on something outside his scope)
// Never change state or action
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;

    }
};

// Exemples NOT "pure function"
let a = 0;
const notPureFn = (b) => {
    return a + b;
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// Increment
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

// Decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

// Reset
store.dispatch(resetCount());

// Set
store.dispatch(setCount({count: 1001}));
