import React, { Component } from 'react'

export default class SortMenu extends Component {
    render() {
        const {
            sortByValues,
            handleSortSelected,
            sortAsc,
            sortDesc,
            // handleSortOrder,
            // sortAndUpdate,
        } = this.props

        // console.log(handleSortSelected);
        // console.log(sortByValues);

        const options = sortByValues.map(option => <option value={option} key={option}>{option}</option>)


        return (
            <>
                {/* DropDown Sort By */}
                <select className='dropdown'
                    onChange={handleSortSelected}>
                    {options}
                </select>

                {/* Sort Ascending/Descending Buttons */}
                <button className='sortBtn' value='ascending' onClick={sortAsc}>Ascending</button>
                <button className='sortBtn' value='descending' onClick={sortDesc}>Descending</button>

            </ >
        )
    }
}
