import React from 'react';
import {connect} from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h2>Expense List</h2>

            <ExpenseListFilters/>

            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })}

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        // filters: state.filters
    }
};


export default connect(mapStateToProps)(ExpenseList);