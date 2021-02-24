import React, { Component } from 'react';
import './SearchPage.css';
import './Marquee/Marquee.css';
import './SideBar/SideBar.css';
import './Pokemon/PokemonList.css';
import './Loading.css';
import request from 'superagent';
import MarqueeScroll from './Marquee/MarqueeScroll.js';
import PokemonList from './Pokemon/PokemonList';
import SideBar from './SideBar/SideBar.js';
export default class SearchPage extends Component {
    state = {
        // Global //
        pokeData: [],
        loading: false,
        totalPokemon: 0,
        currentPage: 1,
        // Search/Sort/Filter //
        searchQuery: '',
        perPage: 25,
        sortBy: ['pokemon', 'type_1', 'attack', 'defense', 'hp'],
        sortSelected: 'pokemon',
        sortOrder: '',
        pokeTypes: [],
        radioSelected: '',
    }
    componentDidMount = async () => {
        await this.fetchPokemonAndTypes()
    }
    componentDidUpdate = async (prevProps, prevState) => {
        const oldPageNumber = prevState.currentPage;
        const newPageNumber = this.state.currentPage;

        if (oldPageNumber !== newPageNumber) {
            await this.fetchPokemonAndTypes();
        }
    }

    fetchPokemonAndTypes = async () => {
        this.setState({
            loading: true
        })

        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${this.state.currentPage}&perPage=${this.state.perPage}`)
        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex/types')

        let pokeTypes = data.body.map(type => type.type);

        await this.setState({
            loading: false,
            pokeData: pokeData.body.results,
            pokeTypes: pokeTypes,
            perPage: pokeData.body.perPage,
            totalPokemon: pokeData.body.count,
        })
    }
    handleQueryChange = async e => this.setState({searchQuery: e.target.value})
    handleSortSelected = async e => this.setState({sortSelected: e.target.value})
    handleRadioSelected = async e => this.setState({radioSelected: e.target.value})
    handleRadioClear = async e => this.setState({radioSelected: ''})
    handlePerPage = async (e) => this.setState({perPage: e.target.value})
    
    handleNext = async (e) => {
            await this.setState({
                currentPage: this.state.currentPage + 1
            })
            await this.fetchPokemonAndTypes();
    }

    handlePrevious = async (e) => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        })
        await this.fetchPokemonAndTypes();
    }

    sortAndUpdate = async e => {
        await this.setState({
            sortOrder: e.target.value
        })

        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortSelected}&direction=${this.state.sortOrder}`)

        await this.setState({
            pokeData: pokeData.body.results
        })
    }
    render() {
        const {
            pokeData,
            pokeTypes,
            loading,
            sortBy,
            sortSelected,
            sortOrder,
            searchQuery,
            radioSelected,
            totalPokemon,
            perPage,
            currentPage,
        } = this.state

        const radioFilter = pokeData.filter(pokeObject => {
            if(!radioSelected) return true;
            return pokeObject['type_1'] === radioSelected;
        })

        const filteredList = radioFilter.filter(pokeObject => {
             return pokeObject['pokemon'].includes(searchQuery)});

        const lastPage = Math.ceil(totalPokemon / perPage)
        
        return (
            <>
            {/* Marquee Scroll */}
            < MarqueeScroll className='marquee-scroll' />
            <main className='grid-container'>                
                {/* SideBar Module */}
                < SideBar className='sidebar float'
                    // Search Bar //
                    searchValue={searchQuery}
                    handleQueryChange={this.handleQueryChange}

                    // Page Nav //
                    handleNext={this.handleNext}
                    handlePrevious={this.handlePrevious}
                    handlePerPage={this.handlePerPage}
                    currentPage={currentPage}
                    lastPage={lastPage}

                    // Sort Asc/Desc //
                    sortByValues={sortBy}
                    sortSelected={sortSelected}
                    handleSortSelected={this.handleSortSelected}
                    sortOrder={sortOrder}
                    sortAndUpdate={this.sortAndUpdate}

                    // Radio Filters //
                    pokeTypes={pokeTypes}
                    radioSelected={radioSelected}
                    handleRadioSelected={this.handleRadioSelected}
                    handleRadioClear={this.handleRadioClear}
                />

                {/* PokeList Module */}
                < PokemonList className='pokemon-list float'
                    loading={loading}
                    pokeData={filteredList}
                />
            </main >
            </>
        )
    }
}
