import React, { Component } from 'react'
import PokemonList from './Pokemon/PokemonList'

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortOrder: '',
        sortBy: 'pokemon',
        query: '',
    }
    render() {
        return (
            <PokemonList />
        )
    }
}
