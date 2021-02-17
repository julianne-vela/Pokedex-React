import React from 'react'

function Marquee() {


    return (
        <div className='marquee-container'>
                {/* Attempting to write a JS function for a continuous marquee loop. */}
            <div className='marquee-scroll'>
                <p>First scroll</p>
                <p className='spacer'></p>
                <p className='spacer'></p>
                <p>Second scroll</p>
            </div>
        </div>
    )
}

export default Marquee
