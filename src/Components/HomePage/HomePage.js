import React, { Component } from 'react'
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <main className='homePage'>
                <section>
                    <h2 className='welcome'>
                        Welcome!
                    </h2>
                    <p className='intro'>
                        Click Search to start finding your  favorite pokemon!
                    </p>
                    <p className='future'>
                        In the future, we plan to add the ability to save teams of pokemon to your profile so that you can reference back to them when planning your epic battles!
                    </p>
                    <p className='signOff'>
                        Now go Catch 'em all!
                    </p>
                </section>
            </main>
        )
    }
}
