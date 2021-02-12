import React, { Component } from 'react'
import PokeItem from './PokemonItem.js';
import pokeData from '../../../data.js';

export default class PokemonList extends Component {
    state = {
        pokeData: pokeData,
        pokeName: '',
        sortOrder: '',
        sortBy: 'pokeName',
        searchQuery: '',
    }


    render() {

        return (
            <>
                <ul className='pokemonList'>
                    {this.state.pokeData.map(pokeObject =>
                        <PokeItem
                            key={pokeObject._id}
                            pokeImage={pokeObject.url_image}
                            pokeName={pokeObject.pokemon}
                            pokeType={pokeObject.type_1}
                            pokeHp={pokeObject.hp}
                            pokeDef={pokeObject.defense}
                        />)}
                </ul>
            </>
        );
    }
}
