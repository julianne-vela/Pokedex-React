import React, { Component } from 'react';
import './SearchPage.css';
import './SideBar/SideBar.css';
import './Pokemon/PokemonList.css';
import pokeData from '../../data.js';
import AppliedFilters from './AppliedFilters.js';
import PokemonList from './Pokemon/PokemonList';
import SideBar from './SideBar/SideBar.js';
import { capFirstLetter } from '../MungeUtils/GeneralUtils.js';
import { sortAscending, sortDescending } from '../MungeUtils/SortUtils.js';

export default class SearchPage extends Component {
    state = {
        pokeData: pokeData,
        searchQuery: '',
        sortOrder: 'ascending',
        sortBy: 'Pokemon',
        tFilterSelected: 'all',
    }

    uniqueTypes = Array.from(new Set(pokeData.map(pokemon => {
        Object.keys(pokemon)
        return capFirstLetter(pokemon.type_1);
    })))

    sortAndUpdate = (callback) => {
        const sortedPokemon = callback(this.state.pokeData, this.state.sortBy)

        this.setState({ pokeData: sortedPokemon })
    }

    handleQueryChange = (e) => {
        e.preventDefault()
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSortBy = (e) => {
        e.preventDefault()
        this.setState({
            sortBy: e.target.value
        })
    }

    handleRadioChange = (e) => {
        e.preventDefault()
        this.setState({
            tFilterSelected: e.target.value
        })
    }



    render() {

        const {
            pokeData,
            sortBy,
            sortOrder,
            searchQuery,
            tFilterSelected,
        } = this.state

        const radioFilter = pokeData.filter((pokeObject) => {
            if (!tFilterSelected || tFilterSelected === 'all') return true;
            return pokeObject['type_1'] === tFilterSelected;
        });

        const filteredList = radioFilter.filter(pokeObject => {
            return pokeObject['pokemon'].includes(searchQuery) || pokeObject['type_1'].includes(tFilterSelected);
        });


        return (
            <main className='grid-container'>
                <SideBar className='sidebar float'
                    // Search Bar //
                    searchQuery={searchQuery}
                    handleQueryChange={this.handleQueryChange}

                    // Sort Asc/Desc //
                    pokeData={pokeData}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    handleSortBy={this.handleSortBy}
                    sortAscending={(e) => this.sortAndUpdate(sortAscending)}
                    sortDescending={(e) => this.sortAndUpdate(sortDescending)}

                    // Radio Filters //
                    radioFilterSelected={tFilterSelected}
                    handleRadioChange={this.handleRadioChange}
                />
                <AppliedFilters className='applied-filters' />
                <PokemonList className='pokemon-list float'
                    filteredPokemon={filteredList}
                />
            </main>
        )
    }
}
