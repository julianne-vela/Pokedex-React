import React, { Component } from 'react'
import { uniqueTypes } from '../../MungeUtils/SortUtils.js';
import { capFirstLetter } from '../../MungeUtils/GeneralUtils.js';

export default class RadioFilter extends Component {
    render() {

        const {
            handleRadioChange,
        } = this.props

        return (
            <>
                {uniqueTypes.map(option =>
                    <label key={option.value}>
                        <input type='radio'
                            name={option}
                            value={option.value}
                            key={option.value}
                            onChange={handleRadioChange} />
                    </label>
                )}
            </>
        )
    }
}
