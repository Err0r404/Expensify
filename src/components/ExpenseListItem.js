import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

// The connect function passes in dispatch as a prop to our component when we wrap it.
const ExpenseListItem = ({id, description, amount, createdAt}) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {moment(createdAt).format('DD/MM/YYYY')}</p>

            <Link to={`/edit/${id}`}>
                Edit
            </Link>
        </div>
    )
};

export default ExpenseListItem;