import React from 'react'
import logo from '../../assets/images/rosie-logo-rg.png'
import rosie from '../../assets/images/rosie-portrait.jpeg'

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

                        <div className='about-summary'>
                            <img alt='Portrait of Rosie' src={rosie} />
                            <div className='about-text'>
                                <p>
                                    <h2>About</h2>

                                    <span className='italic'>Rosie's Gracious Heart</span> is a dream that came to mind in November of 2016 after the tragic pssing of my mom, Rosie.
                                    <br />
                                    <br />
                                    She had worked with children with special needs for over 30 years for Northside Independant School District in San Antonio, Tx. Rosie had a servant's heart, always giving of her time, showing compassion to the children she worked with as well as others. After retiring from Northside Independant School District, she went to work as a two-year-old teacher at Castle Hills Learning Center, and lastly worked as a door greeter at Wal-mart where her heart would shine through her smile. She made friends with everyone she met, she loved life, and now her heart continues to live on through the blessings that are shared through this organization.
                                    <br />
                                    <br />
                                    We may have lost her physically, but her memory and legacy will live on with <span className='italic'>Rosie's Gracious Heart</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Home
