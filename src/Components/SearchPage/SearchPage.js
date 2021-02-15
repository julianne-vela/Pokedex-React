import React, { Component } from 'react';
import './SearchPage.css';
import './SideBar/SideBar.css';
import './Pokemon/PokemonList.css';
import pokeData from '../../data.js';
import AppliedFilters from './AppliedFilters.js';
import PokemonList from './Pokemon/PokemonList';
import SideBar from './SideBar/SideBar.js';

export default class SearchPage extends Component {
    state = {
        pokeData: pokeData,
        searchQuery: '',
        sortBy: ['pokemon', 'type_1', 'attack', 'defense', 'hp'],
        sortSelected: 'pokemon',
        tFilterSelected: 'all',
    }
    sortAsc = () => {
        const { pokeData, sortSelected } = this.state;
        this.setState({
            pokeData: [...pokeData].sort((a, b) => {
                if (a[sortSelected] > b[sortSelected]) {
                    return 1;
                }

                if (a[sortSelected] < b[sortSelected]) {
                    return -1;
                }

                return 0;
            })
        });
    };

    sortDesc = () => {
        const { pokeData, sortSelected } = this.state;
        this.setState({
            pokeData: [...pokeData].sort((a, b) => {
                if (a[sortSelected] > b[sortSelected]) {
                    return -1;
                }

                if (a[sortSelected] < b[sortSelected]) {
                    return 1;
                }

                return 0;
            })
        });
    };

    handleQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSortSelected = (e) => {
        this.setState({
            sortSelected: e.target.value
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
            sortSelected,
            searchQuery,
            tFilterSelected,
        } = this.state

        const filteredList = pokeData.filter(pokeObject => {
            return pokeObject['pokemon'].includes(this.state.searchQuery) || pokeObject['type_1'].includes(tFilterSelected);
        });

        return (
            <main className='grid-container' >
                {/* SideBar Module */}
                < SideBar className='sidebar float'
                    // Search Bar //
                    searchValue={searchQuery}
                    handleQueryChange={this.handleQueryChange}

                    // Sort Asc/Desc //
                    sortByValues={sortBy}
                    sortSelected={sortSelected}
                    handleSortSelected={this.handleSortSelected}
                    sortAsc={this.sortAsc}
                    sortDesc={this.sortDesc}

                    // Radio Filters //
                    radioSelectedValue={tFilterSelected}
                    handleRadioChange={this.handleRadioChange}
                />

                {/* Applied Filters - options stretch */}
                < AppliedFilters className='applied-filters' />

                {/* PokeList Module */}
                < PokemonList className='pokemon-list float'
                    filteredPokemon={filteredList}
                />
            </main >
        )
    }
}
