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
            pokeAtt,
        } = this.props

        return (
            <div className='pokemonItem'>
                <label className='name'>{pokeName}</label>
                <img className='pokeImage' alt={pokeName} src={pokeImage} />
                <p className='stats'>
                    <span>Type: {pokeType}</span><br></br>
                    <span>Att: {pokeAtt} | </span>
                    <span>Def: {pokeDef}</span><br></br>
                    <span>HP: {pokeHp}</span>
                </p>
            </div>
        )
    }
}
