import React from 'react'
import logo from '../../assets/images/rosie-logo-rg.png'

const Home
    = () =>
    {
        return (
            <>
                <div className='home-container'>
                    <div className='hero-container'>
                        <h1 className='title'>Rosie's Gracious Heart</h1>
                    </div>
                    <div className='page-container'>
                        <div className='mission-statement'>
                            <div className='mission-logo'>
                                <img alt="Rosie's Gracious Heart logo" src={logo} />
                            </div>
                            <p className='statement-text'>
                            <h2>Our Mission</h2>
                                <span className='bold-text'>Our mission is to provide support and services to individuals with special needs through programs and community resources.</span>
                                <br />
                                We serve the southside of San Antonio’s special needs community by providing food, clothing, hygiene, and school supplies when there is a need. We will be providing therapy; activities such as art, music, and dance therapy; as well as enhancing social skills and life skills during all activities.
                                <br />
                                <br />
                                We have provided Easter, Back-to-school, and Christmas events for the residents of Mission Road Development Center for the past four years.

                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Home
