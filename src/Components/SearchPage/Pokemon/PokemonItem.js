import React, { Component } from 'react'
import './PokemonItem.css';

export default class PokemonItem extends Component {
    render() {
        const {
            pokeName,
            pokeImage,
            pokeType,
            pokeHp,
            pokeDef,
        } = this.props

        return (
            <li className='pokemonItem'>
                <label className='name'>{pokeName}</label>
                <img alt='pokemon sprite' src={pokeImage} />
                <p className='stats'>
                    <span>Type: {pokeType}</span><br></br>
                    <span>HP: {pokeHp}</span><br></br>
                    <span>Defense: {pokeDef}</span>
                </p>
            </li >
        )
    }
}
