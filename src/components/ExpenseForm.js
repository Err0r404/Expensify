import React from 'react';

class ExpenseForm extends React.Component{
    state = {
        description: '',
        note: '',
        amount: 0
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if(amount.match(/^\d*([\.\,]\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    };

    render() {
        return(
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