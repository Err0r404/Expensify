import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

// Used to change language and format in react-dates
// moment.locale('fr');

class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : 0,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}([\.\,]\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({createdAt}));
        }
    };

    // See react-dates documentation
    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: "Please provide a description and an amount"}));
        }
        else{
            this.setState(() => ({error: ""}));

            // this.props comes from parent != this.state
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.onSubmit}>
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
                    {/*<input type="submit" value={"Add"}/>*/}
                </form>
            </div>
        )
    };
}

export default ExpenseForm;