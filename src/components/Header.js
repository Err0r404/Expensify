import React from 'react';
import {NavLink} from 'react-router-dom';

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

export default Header;