import React, { Component } from 'react'
import { capFirstLetter } from '../../MungeUtils/GeneralUtils.js';
import PokeItem from './PokemonItem.js';

export default class PokemonList extends Component {


    render() {
        const { filteredPokemon } = this.props

        return (
            <content className='pokemon-list float'>
                {filteredPokemon.map(pokeObject =>
                    <PokeItem
                        key={pokeObject._id}
                        pokeImage={pokeObject.url_image}
                        pokeName={capFirstLetter(pokeObject.pokemon)}
                        pokeType={capFirstLetter(pokeObject.type_1)}
                        pokeHp={pokeObject.hp}
                        pokeAtt={pokeObject.attack}
                        pokeDef={pokeObject.defense}
                    />)}
            </content>
        );
    }
}
