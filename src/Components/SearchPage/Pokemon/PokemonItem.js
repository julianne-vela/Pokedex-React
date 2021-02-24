import React, { Component } from 'react'
import './PokemonItem.css';
import {Link} from 'react-router-dom'

export default class PokemonItem extends Component {
    render() {
        const {
            pokeName,
            pokeImage,
            pokeType,
            pokeColor1,
            pokeColor2,
            pokeColor3,
        } = this.props

        console.log(pokeName);
        return (
            <Link to={`pokemon/${pokeName}`}>
                <div className='pokemonItem' style={{backgroundColor: `${pokeColor1}`}}>
                    
                    <label className='name' style={{backgroundColor: `${pokeColor3}`}}>
                        {pokeName}
                    </label>
                    <img className='image' alt={pokeName} src={pokeImage} />
                    <p className='stats' style={{backgroundColor: `${pokeColor2}`}}>
                        Type: {pokeType}
                    </p>
                </div>
            </Link>
        )
    }
}
