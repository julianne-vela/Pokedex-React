import React, { Component } from 'react'
import { capFirstLetter } from '../../MungeUtils/GeneralUtils.js';
import PokeItem from './PokemonItem.js';
import Loading from '../Loading.js';

export default class PokemonList extends Component {


    render() {
        const { pokeData, loading } = this.props

        return (
            <content className='pokemon-list float'>
                {loading ? <Loading /> : pokeData.map(pokeObject =>
                    <PokeItem
                        pokeData={pokeData}
                        key={pokeObject._id}
                        pokeImage={pokeObject.url_image}
                        pokeName={capFirstLetter(pokeObject.pokemon)}
                        pokeType={capFirstLetter(pokeObject.type_1)}
                        pokeHp={pokeObject.hp}
                        pokeAtt={pokeObject.attack}
                        pokeDef={pokeObject.defense}
                        pokeColor1={pokeObject.color_1}
                        pokeColor2={pokeObject.color_2}
                        pokeColor3={pokeObject.color_f}
                    />)}
            </content>
        );
    }
}
