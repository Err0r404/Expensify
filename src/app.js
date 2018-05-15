// npm run serve
// npm run build

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './styles/styles.scss';

const ExpenseDashboardPage = () => {
    return (
        <div>
            Dashboard's component
        </div>
    )
};

const AddExpensePage = () => {
    return (
        <div>
            Add expense's component
        </div>
    )
};

const EditExpensePage = () => {
    return (
        <div>
            Edit expense's component
        </div>
    )
};

const HelpPage = () => {
    return (
        <div>
            Help expense's component
        </div>
    )
};

const NotFoundPage = () => {
    return (
        <div>
            Not found's component
        </div>
    )
};

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
