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
            pokeColor1,
            pokeColor2,
            pokeColor3,
        } = this.props

        return (
            <div className='pokemonItem'
                style={{
                    backgroundColor: `${pokeColor1}`
                }}>
                <label className='name'
                    style={{
                        backgroundColor: `${pokeColor3}`
                    }}
                >
                    {pokeName}
                </label>
                <img className='pokeImage' alt={pokeName} src={pokeImage} />
                <p className='stats'
                    style={{
                        backgroundColor: `${pokeColor2}`
                    }}
                >
                    Type: {pokeType}{<br></br>}
                    Att: {pokeAtt} |
                    Def: {pokeDef}{<br></br>}
                    HP: {pokeHp}
                </p>
            </div>
        )
    }
}
