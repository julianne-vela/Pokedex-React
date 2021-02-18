import React, { Component } from 'react';
import './PokeDetails.css';
import request from 'superagent';
import {capFirstLetter} from '../MungeUtils/GeneralUtils.js';
import Loading from '../SearchPage/Loading.js';

export default class PokeDetails extends Component {
    state = {
        pokeObject: {},
        loading: false,
    }
    componentDidMount = async () => {
        await this.fetchPokemon()
    }

    fetchPokemon = async () => {
        await this.setState({
            loading: true,
        })

        const pokeObject = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params._id}`)

        await this.setState({
            pokeObject: pokeObject.body.results[0],
            loading: false,
        })
    }
    render() {
        const {
            pokeObject: {
                pokemon,
                url_image,
                type_1,
                type_2,
                attack,
                defense,
                hp,
                ability_1,
                ability_2,
                special_attack,
                special_defense,
                pokedex,
            }
        } = this.state

        function HasBoth(prop1, prop2) {
            if (prop1 && prop2 === 'NA') {
                return `${prop1}`
            } 
            else if(prop1 && prop2 !== 'NA') {
                return `${prop1} | ${prop2}`;
            } return false
        }

        return (
            <main className='detailsMain'>
                <section className='pokeDisplay' >
                    <label className='pokeName'>{pokemon}</label>
                    <img className='pokeImage' alt={pokemon} src={url_image} />
                    <ul className='pokeStats' >
                        <li>Type: {HasBoth(type_1, type_2)}</li>
                        <li>Att: {attack}</li>
                        <li>Def: {defense}</li>
                        <li>HP: {hp}</li>
                        <li>Special Attack: {special_attack} </li>
                        <li>Special Defense: {special_defense} </li>
                        <li>Ability: {HasBoth(ability_1, ability_2)} </li>
                        <li><a href={pokedex}>Pokedex Entry</a></li>
                    </ul>
                </section>
            </main>
        )
    }
}


// styles //
// card - style={{backgroundColor: pokeObject.color_1}} 
// name label - style={{backgroundColor: `${pokeObject.color_3}`}}
// type label - style={{backgroundColor: `${pokeObject.color_2}`}}
