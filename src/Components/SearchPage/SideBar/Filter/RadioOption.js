import React, { Component } from 'react'
import images from '../../../../Assets/PokeSymbols.js';
import { 
    findById,
    capFirstLetter,
} from '../../../MungeUtils/GeneralUtils.js';

export default class RadioOption extends Component {
        render() {
        const {
            value,
            onChange,
            radioSelected,
        } = this.props;

        const typeImg = findById(images, value)

        return(
            <>
                <label className='radioLabel' 
                    name={value}>
                    <input className='radioInput' 
                        type='radio' 
                        value={value} 
                        onChange={onChange} 
                        checked={radioSelected === value} 
                    />
                    <img className='radioImg' 
                        alt={typeImg.description} 
                        src={process.env.PUBLIC_URL + `./Assets/${value}.png`} />
                    <figcaption className='caption'>{capFirstLetter(value)}</figcaption>
                </label>
            </>
        )
    }
}

// const {
//     name,
//     value,
//     key,
//     onChange,
// } = this.props

// return (
//     <>
//         <input className='radioInput'
//             type='radio' 
//             name={name} 
//             value={value} 
//             key={key} 
//             onChange={onChange} />
//         <label >
//             <img alt={findById(images, value).description} src={findById(images, value).src} />
//         </label>
//     </>
// )