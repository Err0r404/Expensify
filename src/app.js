// npm run serve
// npm run build

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

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
            <p>Not found's component</p>
            <Link to="/">Home</Link>
        </div>
    )
};

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>

            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink> |
            <NavLink to="/create" activeClassName="active">Add</NavLink> |
            <NavLink to="/edit" activeClassName="active">Edit</NavLink> |
            <NavLink to="/help" activeClassName="active">Help</NavLink>
        </header>
    )
};

const routes = (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
