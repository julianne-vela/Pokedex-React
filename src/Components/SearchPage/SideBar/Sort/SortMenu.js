import React, { Component } from 'react';
import {capFirstLetter} from '../../../MungeUtils/GeneralUtils.js';

export default class SortMenu extends Component {
    render() {
        const {
            sortByValues,
            handleSortSelected,
            sortAndUpdate,
        } = this.props

        const options = sortByValues.map(option => <option value={option} key={option}>{capFirstLetter(option)}</option>)


        return (
            <aside className='sortMenu'>
                <label className='sortLabel'>Sort By: 
                    {/* DropDown Sort By */}
                    <select className='sortDropDown'
                        onChange={handleSortSelected}>
                        {options}
                    </select>
                </label>
                {/* Sort Ascending/Descending Buttons */}
                <button className='sortBtn asc' value='ascending' onClick={sortAndUpdate}>Ascending</button>
                <button className='sortBtn desc' value='descending' onClick={sortAndUpdate}>Descending</button>
            </ aside>
        )
    }
}
