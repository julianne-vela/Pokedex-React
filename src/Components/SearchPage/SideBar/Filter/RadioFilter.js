import React, { Component } from 'react'
import RadioOption from './RadioOption.js';

export default class RadioFilter extends Component {
    render() {

        const {
            pokeTypes,
            radioSelected,
            handleRadioSelected,
        } = this.props

        return (
            <div className='radioWrapper'>
                {pokeTypes.map(type =>
                    <RadioOption className='radio'
                        value={type}
                        key={type}
                        onChange={handleRadioSelected} 
                        radioSelected={radioSelected} />
                )}
            </div>
        )
    }
}

