import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

// Used to change language and format in react-dates
// moment.locale('fr');

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: 0,
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*([\.\,]\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}));
    };

    // See react-dates documentation
    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    render() {
        return (
            <div>
                <form action="">
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus={true}
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => {false}}
                    />
                    <br/>

                    <textarea
                        cols="30"
                        rows="5"
                        placeholder="Optional note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <br/>

                    <button>Add</button>
                </form>
            </div>
        )
    };
}

export default ExpenseForm;