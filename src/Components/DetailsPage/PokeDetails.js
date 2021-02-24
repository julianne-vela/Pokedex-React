import React, { Component } from 'react';
import './PokeDetails.css';
import request from 'superagent';
import Loading from '../SearchPage/Loading.js';
import {NavLink} from 'react-router-dom'
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
            pokeObject,
            loading
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
                {loading ? <Loading /> : 
                <section className='pokeDisplay' 
                    style={
                        {backgroundColor: `${pokeObject.color_1}`}
                    }>
                    <label className='pokeName' 
                        style={
                            {backgroundColor: `${pokeObject.color_f}`}
                        }>
                        {pokeObject.pokemon}
                    </label>
                    <img className='pokeImage' alt={pokeObject.pokemon} src={pokeObject.url_image} />
                    <ul className='pokeStats' style={{backgroundColor: `${pokeObject.color_2}`}}>
                        <li>Type: {HasBoth(pokeObject.type_1, pokeObject.type_2)}</li>
                        <li>Att: {pokeObject.attack}</li>
                        <li>Def: {pokeObject.defense}</li>
                        <li>HP: {pokeObject.hp}</li>
                        <li>Special Attack: {pokeObject.special_attack} </li>
                        <li>Special Defense: {pokeObject.special_defense} </li>
                        <li>Ability: {HasBoth(pokeObject.ability_1, pokeObject.ability_2)} </li>
                        <li><a href={pokeObject.pokedex}>Pokedex Entry</a></li>
                    </ul>
                </section>}
                <NavLink className='search' exact activeClassName='selected' to='/pokemon'>Back to your Pokedex</NavLink>
            </main>
        )
    }
}


// styles //
// card - style={{backgroundColor: pokeObject.color_1}} 
// name label - style={{backgroundColor: `${pokeObject.color_3}`}}
// type label - style={{backgroundColor: `${pokeObject.color_2}`}}
