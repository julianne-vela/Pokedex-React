import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage.js';
import HomePage from '../HomePage/HomePage.js';
import Header from './Header.js';
import PokeDetails from '../DetailsPage/PokeDetails.js';
import '../../App.css';

export default class Routes extends Component {
    render() {
        return (
            <main className='routes'>
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />}
                        />
                        <Route
                            path="/pokemon"
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />}
                        />
                        <Route
                            path="/pokemon/:_id"
                            exact
                            render={(routerProps) => <PokeDetails {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </main>
        )
    }
}
