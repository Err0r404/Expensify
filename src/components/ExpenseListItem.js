import React from 'react';
import {connect} from 'react-redux';

import {removeExpense} from '../actions/expenses'

// The connect function passes in dispatch as a prop to our component when we wrap it.
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}, props) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <button onClick={(props) => {
                dispatch(removeExpense({id}))
            }}>Remove</button>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
};

export default connect()(ExpenseListItem);