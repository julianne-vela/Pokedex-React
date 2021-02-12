import React, { Component } from 'react';
import pokeData from '../../data.js';
import PokemonList from './Pokemon/PokemonList';
import SideBar from './SideBar/SideBar.js';

export default class SearchPage extends Component {
    state = {
        pokeData: pokeData,
        pokeName: '',
        sortOrder: '',
        sortBy: 'pokeName',
        searchQuery: '',
    }

    handleQueryChange = (e) => {
        e.preventDefault()
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleFilterChange = (e) => {
        e.preventDefault()
        this.setState({
            sortBy: e.target.value
        })
    }

    render() {
        const {
            // sortBy,
            searchQuery
        } = this.state

        return (
            <>
                <SideBar
                    // grabs value from state, prop to pass to sideBar
                    // sortBy={sortBy}
                    // grabs change function from search, prop to pass to Sort
                    // handleChange={this.handleFilterChange}
                    // grabs value from state, prop to pass to sideBar
                    searchQuery={searchQuery}
                    // grabs change function from search, prop to pass to searchBar
                    handleChange={this.handleQueryChange}
                />
                <PokemonList
                />
            </>
        )
    }
}
