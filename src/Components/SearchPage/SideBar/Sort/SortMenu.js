import React, { Component } from 'react'

export default class SortMenu extends Component {
    render() {
        const {
            sortByValues,
            handleSortSelected,
            sortAndUpdate,
        } = this.props

        const options = sortByValues.map(option => <option value={option} key={option}>{option}</option>)


        return (
            <>
                {/* DropDown Sort By */}
                <select className='dropDown'
                    onChange={handleSortSelected}>
                    {options}
                </select>

                {/* Sort Ascending/Descending Buttons */}
                <button className='sortBtn' value='ascending' onClick={sortAndUpdate}>Ascending</button>
                <button className='sortBtn' value='descending' onClick={sortAndUpdate}>Descending</button>

            </ >
        )
    }
}