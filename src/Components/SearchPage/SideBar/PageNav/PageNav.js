import React, { Component } from 'react'

export default class PageNav extends Component {
    render() {
        const {
            handleNext,
            handlePrevious,
            handlePerPage,
            currentPage,
            lastPage,
        } = this.props

        console.log(currentPage);
        return (
            <nav className='pageNav'>
                {/* <div className='navWrapper'> */}
                    <button className='navBtn previous' 
                        value='previous' 
                        onClick={handlePrevious} 
                        disabled={currentPage === 1}>
                            Previous
                    </button>
                    <p className='current'>
                        {currentPage}
                    </p>
                    <button className='navBtn next' 
                        value='next' 
                        onClick={handleNext} 
                        disabled={lastPage === currentPage}>
                            Next
                    </button>
                {/* </div> */}
                <label className='navLabel'>Results per Page: 
                <select className='dropDown' onChange={handlePerPage}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='75'>75</option>
                    <option value='100'>100</option>
                </select></label>
            </nav>
        )
    }
}
