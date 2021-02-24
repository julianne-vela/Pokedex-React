import React, { Component } from 'react'
import RadioOption from './RadioOption.js';

export default class RadioFilter extends Component {
    render() {

        const {
            pokeTypes,
            radioSelected,
            handleRadioSelected,
            handleRadioClear
        } = this.props

        return (
            <section className='radioFilter'>
                <label className='filterLabel'>
                    Filter By Type 
                <button className='clearBtn' onClick={handleRadioClear}>Clear</button>
                </label>
            <div className='radioWrapper'>{pokeTypes.map(type =>
                    <RadioOption className='radio'
                        value={type}
                        key={type}
                        onChange={handleRadioSelected} 
                        radioSelected={radioSelected} />
                    )}
                </div>
            </section>
        )
    }
}

