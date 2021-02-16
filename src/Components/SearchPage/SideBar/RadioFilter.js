import React, { Component } from 'react'
import { uniqueTypes } from '../../MungeUtils/SortUtils.js';
import RadioOption from './RadioOption.js';

export default class RadioFilter extends Component {
    render() {

        const {
            handleRadioChange,
        } = this.props


        // <>
        //     <input type='radio'
        //         name={option}
        //         value={option}
        //         key={option}
        //         onChange={handleRadioChange} />
        //     <label key={Math.random}>
        //         <img alt={`${option} type pokemon symbol`} key={Math.random()} src={findById(images, 'grass').src} />
        //     </label>
        // </>)

        return (
            <>
                {uniqueTypes.map(option =>
                    <RadioOption className='radio'
                        name={option}
                        value={option}
                        key={option}
                        onChange={handleRadioChange} />
                )}
            </>
        )
    }
}

