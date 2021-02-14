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
        // sortOrder: 'ascending',
        sortBy: ['pokemon', 'type_1', 'attack', 'defense', 'hp'],
        sortSelected: 'pokemon',
        tFilterSelected: 'all',
    }

    sortAsc = () => {
        this.setState(prevState => {
            this.state.pokeData.sort((a, b) => (a[this.state.sortSelected] - b[this.state.sortSelected]))
        })
    }

    sortDesc = () => {
        this.setState(prevState => {
            this.state.pokeData.sort((a, b) => (b[this.state.sortSelected] - a[this.state.sortSelected]))
        })
    }

    // sortAndUpdate = (callback) => {
    //     const sortedPokemon = callback()

    //     this.setState({ pokeData: sortedPokemon })
    // }

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

    // handleSortOrder = (e) => {
    //     this.setState({
    //         sortOrder: e.target.value
    //     })
    // }

    // handleRadioChange = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         tFilterSelected: e.target.value
    //     })
    // }

    // sort = () => {
    //     if (this.state.sortSelected === "attack" || this.state.sortSelected === "defense" || this.state.sortSelected === "hp") {
    //         if (this.state.sortOrder === 'ascending') {
    //             pokeData.sort((a, b) => a[this.state.sortSelected] - b[this.state.sortSelected])
    //         } else {
    //             pokeData.sort((a, b) => b[this.state.sortSelected] - a[this.state.sortSelected])
    //         }
    //     } else {
    //         if (this.state.sortOrder === 'ascending') {
    //             pokeData.sort((a, b) => a[this.state.sortSelected].localeCompare(b[this.state.sortSelected]))
    //         } else {
    //             pokeData.sort((a, b) => b[this.state.sortSelected].localeCompare(a[this.state.sortSelected]))
    //         }
    //     }
    // }

    render() {
        const {
            pokeData,
            sortBy,
            sortSelected,
            // sortOrder,
            searchQuery,
            tFilterSelected,
        } = this.state

        // const filteredPokemon = pokeData.filter(pokeObject => {
        //     if (searchQuery === '') return pokeData;
        //     if (pokeObject.pokemon.includes(searchQuery)) return true;
        //     return filteredPokemon;
        // });

        const filteredList = pokeData.filter(pokeObject => {
            return pokeObject['pokemon'].includes(this.state.searchQuery) || pokeObject['type_1'].includes(tFilterSelected);
        });

        // if (sortOrder === 'ascending') {
        //     pokeData.sort((a, b) => a[sortBy] - (b[sortBy]))
        // }
        // else pokeData.sort((a, b) => b[sortBy] - (a[sortBy]))

        return (
            <main className='grid-container' >
                {/* SideBar Module */}
                < SideBar className='sidebar float'
                    // Search Bar //
                    searchValue={searchQuery}
                    handleQueryChange={this.handleQueryChange}

                    // Sort Asc/Desc //
                    sortByValues={sortBy}
                    // sortOrderValue={sortOrder}
                    sortSelected={sortSelected}
                    handleSortSelected={this.handleSortSelected}
                    sortAsc={this.sortAsc}
                    sortDesc={this.sortDesc}

                    // handleSortOrder={this.handleSortOrder}
                    // sortAndUpdate={(e) => { this.sort() }}

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
