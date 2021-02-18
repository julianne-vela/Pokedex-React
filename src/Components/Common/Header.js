import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import './Header.css';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header className='header'>
                <NavLink className='home' exact activeClassName='selected' to='/'>
                    <p>Home</p>
                </NavLink>
                <h1 className='title'>Nessi's Pokedex</h1>
                <NavLink className='search' exact activeClassName='selected' to='/pokemon'>
                    <p>Search</p>
                </NavLink>
            </header>
        )
    }
})
