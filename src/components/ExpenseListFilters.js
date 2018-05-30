import React from 'react';
import {connect} from 'react-redux';

import {setTextFilter, sortByDate, sortByAmount} from "../actions/filters";

const ExpenseListFilters = (props) => {
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={(event) => {
                props.dispatch(setTextFilter(event.target.value));
            }}/>

            <select value={props.filters.sortBy} onChange={(event) => {
                if(event.target.value === 'date'){
                    props.dispatch(sortByDate())
                }
                else{
                    props.dispatch(sortByAmount())
                }
            }}>
                <option value="date">By date</option>
                <option value="amount">By amount</option>
            </select>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);