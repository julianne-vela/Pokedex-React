import React, { Component } from 'react';
import './SearchPage.css';
import './SideBar/SideBar.css';
import './Pokemon/PokemonList.css';
import pokeData from '../../data.js';
import AppliedFilters from './AppliedFilters.js';
import PokemonList from './Pokemon/PokemonList';
import SideBar from './SideBar/SideBar.js';
import { capFirstLetter } from '../MungeUtils/GeneralUtils.js';

export default class SearchPage extends Component {
    uniqueTypes = Array.from(new Set(pokeData.map(pokemon => {
        Object.keys(pokemon)
        return capFirstLetter(pokemon.type_1);
    })))


    state = {
        pokeData: pokeData,
        searchQuery: '',
        sortOrder: 'ascending',
        tFilterSelected: 'all',
    }


    handleQueryChange = (e) => {
        e.preventDefault()
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleTypeChange = (e) => {
        e.preventDefault()
        this.setState({
            tFilterSelected: e.target.value
        })
    }


    render() {

        const {
            pokeData,
            searchQuery,
            sortOrder,
            tFilterSelected,
        } = this.state
        console.log(tFilterSelected);

        // sort in Ascending Order //
        if (typeof sortOrder === 'string') {
            pokeData.sort(
                (a, b) =>
                    a['type_1'].localeCompare(b['type_1'])
            )
        }

        const filteredPokemon = pokeData.filter((pokeObject) => {
            if (!searchQuery && tFilterSelected === 'all') return true;
            if (tFilterSelected) return (pokeObject.type_1 === tFilterSelected);
            // if (!keyword && horns) return (image.horns === horns);
            // if (keyword && horns) return (image.keyword === keyword && image.horns === horns);
            return false;
        });

        // const filteredPokemon = pokeData.filter(pokeObject => {
        //     if (!searchQuery || pokeObject.pokemon.includes(searchQuery)) return true;
        //     if (!tFilterSelected || tFilterSelected === 'all') return true;
        //     return pokeObject['type_1'] === tFilterSelected;
        // });

        // const filteredPokemon = pokeData.filter(pokeObject => pokeObject.pokemon.includes(searchQuery))

        return (
            <main className='grid-container'>
                <SideBar className='sidebar float'
                    // grabs type values from uniqueTypes - pass as prop 'typeOptions' to SideBar
                    typeOptions={this.uniqueTypes}
                    // grab state value for tFilterSelected - pass as prop'filterSelected' to DropDown
                    filterSelected={tFilterSelected}
                    // grabs change function from search, prop to pass to Sort
                    handleTypeChange={this.handleTypeChange}
                    // grabs value from state, prop to pass to sideBar
                    searchQuery={searchQuery}
                    // grabs change function from search, prop to pass to searchBar
                    handleQueryChange={this.handleQueryChange}
                />
                <AppliedFilters className='applied-filters' />
                <PokemonList className='pokemon-list float'
                    filteredPokemon={filteredPokemon}
                />
            </main>
        )
    }
}
