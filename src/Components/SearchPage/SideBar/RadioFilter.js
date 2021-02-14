import React, { Component } from 'react'
import { uniqueTypes } from '../../MungeUtils/SortUtils.js';

export default class RadioFilter extends Component {
    render() {
        return (
            <input className='radio'
                type='radio'
                name='pokeObject.type_1'
            >

            </input>
        )
    }
}
