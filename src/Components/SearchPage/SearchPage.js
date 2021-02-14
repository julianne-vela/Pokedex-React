import React, { Component } from 'react';
import './SearchPage.css';
import './SideBar/SideBar.css';
import './Pokemon/PokemonList.css';
import pokeData from '../../data.js';
import AppliedFilters from './AppliedFilters.js';
import PokemonList from './Pokemon/PokemonList';
import SideBar from './SideBar/SideBar.js';
import { sort } from '../MungeUtils/SortUtils.js';

export default class SearchPage extends Component {
    state = {
        pokeData: pokeData,
        searchQuery: '',
        sortOrder: 'ascending',
        sortBy: 'Pokemon',
        tFilterSelected: 'all',
    }

    handleQueryChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    handleSortBy = (event) => {
        this.setState({
            sortBy: event.target.value
        })
    }

    handleSortOrder = (event) => {
        this.setState({
            sortOrder: event.target.value
        })
    }

    sortFunction = () => {
        sort(
            this.state.pokeData,
            this.state.sortBy,
            this.state.sortOrder)
    }

    sortBtnHandler = () => {
        this.handleSortOrder()
        this.sortFunction()
    }

    // handleRadioChange = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         tFilterSelected: e.target.value
    //     })
    // }

    render() {

        const {
            pokeData,
            searchQuery,
            tFilterSelected,
        } = this.state

        const filteredList = pokeData.filter(pokeObject => {
            return pokeObject['pokemon'].includes(searchQuery) || pokeObject['type_1'].includes(tFilterSelected);
        });


        return (
            <main className='grid-container'>
                {/* SideBar Module */}
                <SideBar className='sidebar float'
                    // Search Bar //
                    searchValue={searchQuery}
                    handleQueryChange={this.handleQueryChange}

                    // Sort Asc/Desc //
                    handleSortBy={this.handleSortBy}
                    handleSortOrder={this.handleSortOrder}
                    sortFunction={this.sortFunction}
                    sortBtnHandler={this.sortBtnHandler}

                    // Radio Filters //
                    radioSelectedValue={tFilterSelected}
                    handleRadioChange={this.handleRadioChange}
                />

                {/* Applied Filters - options stretch */}
                <AppliedFilters className='applied-filters' />

                {/* PokeList Module */}
                <PokemonList className='pokemon-list float'
                    filteredPokemon={filteredList}
                />
            </main>
        )
    }
}
