import React, { Component } from 'react';
import './SearchPage.css';
import './SideBar/SideBar.css';
import './Pokemon/PokemonList.css';
import './Loading.css';
import request from 'superagent';
import MarqueeScroll from './MarqueeScroll.js';
import PokemonList from './Pokemon/PokemonList';
import SideBar from './SideBar/SideBar.js';
export default class SearchPage extends Component {
    state = {
        // Global //
        pokeData: [],
        loading: false,
        // Search //
        searchQuery: '',
        // Sort //
        sortBy: ['pokemon', 'type_1', 'attack', 'defense', 'hp'],
        sortSelected: 'pokemon',
        sortOrder: '',
        // Filter (radio) //
        pokeTypes: [],
        radioSelected: '',
    }
    componentDidMount = async () => {
        await this.fetchPokemonAndTypes()
        // await this.fetchTypes()
    }
    fetchPokemonAndTypes = async () => {
        this.setState({
            loading: true,
            pokeData: [],
            pokeTypes: [],
        })

        const pokeData = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=50')
        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex/types')

        let pokeTypes = data.body.map(type => type.type);

        this.setState({
            loading: false,
            pokeData: pokeData.body.results,
            pokeTypes: pokeTypes,
        })


    }
    handleQueryChange = async e => this.setState({searchQuery: e.target.value})
    handleSortSelected = async e => this.setState({sortSelected: e.target.value})
    handleRadioSelected = async e => this.setState({radioSelected: e.target.value})

    sortAndUpdate = async e => {
        this.setState({
            sortOrder: e.target.value
        })

        const pokeData = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?sort={this.state.sortSelected}&direction={this.state.sortOrder}')

        this.setState({
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
        } = this.state

        return (
            <>
            {/* Marquee Scroll */}
            < MarqueeScroll className='marquee-scroll' />
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
                    sortOrder={sortOrder}
                    sortAndUpdate={this.sortAndUpdate}

                    // Radio Filters //
                    pokeTypes={pokeTypes}
                    radioSelected={radioSelected}
                    handleRadioSelected={this.handleRadioSelected}
                />

                {/* PokeList Module */}
                < PokemonList className='pokemon-list float'
                    loading={loading}
                    pokeData={pokeData}
                />
            </main >
            </>
        )
    }
}
