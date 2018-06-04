import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';

import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState({ calendarFocused });
    };

    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(event) => {
                    this.props.dispatch(setTextFilter(event.target.value));
                }}/>

                <select value={this.props.filters.sortBy} onChange={(event) => {
                    if(event.target.value === 'date'){
                        this.props.dispatch(sortByDate())
                    }
                    else{
                        this.props.dispatch(sortByAmount())
                    }
                }}>
                    <option value="date">By date</option>
                    <option value="amount">By amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate}
                    // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => {false}}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);