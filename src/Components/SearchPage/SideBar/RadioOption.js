import React, { Component } from 'react'
import images from './PokeSymbols.js';
import { findById } from '../../MungeUtils/GeneralUtils.js';

export default class RadioOption extends Component {
    render() {
        const {
            name,
            value,
            key,
            onChange,
        } = this.props

        return (
            <>
                <input type='radio' name={name} value={value} key={key} onChange={onChange} />
                <label >
                    <img alt={findById(images, value).description} src={findById(images, value).src} />
                </label>
            </>
        )
    }
}
