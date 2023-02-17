import React from 'react'
import Rosie from '../../assets/images/rosie-portrait.jpeg'
import { NavLink } from 'react-router-dom'

const About = () =>
{
    return (
        <>
            <div className='about-page'>
                <div className='hero'>
                </div>
            <div className='about-container'>
                <div className='about-text'>
                    <div className='about-text-container'>
                        <div className='text-container'>

                            <img alt='portrait of rosie' src={Rosie} />
                            <p>
                                <h2>About Rosie's Gracious Heart</h2>
                                
                                <span className='italic-text'>Rosie’s Gracious Heart</span> is a dream that came to mind in November of 2016 after the tragic passing of my mom Rosie. She had worked with children with special needs for over 30 years for Northside Independent School District.
                                <br />
                                <br />

                                Rosie had a servant’s heart, always giving of her time, loving life, showed compassion to the children she worked with as well as others. After retiring from Northside Independent School District, she went to work as a two-year-old teacher at Castle Hills Learning Center, and lastly worked as a door greeter at Wal-Mart where her heart would shine thru her smile making friends with everyone she met.
                                <br />
                                <br />
                                Mom loved life, her heart continues to live on thru the blessings that are shared with others thru this organization. We may have lost her physically here with us, but her memory and legacy will live on with  <span className='italic-text'>Rosie’s Gracious Heart</span>.
                            </p>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <div className='mission-statement'>
                    <h3>
                        Our mission is to provide support and services to individuals with special needs and seniors, through programs and community resources. 
                        </h3>
                        <br/>
                        <p>
                            We serve the Southside of San Antonio’s special needs community by providing food, clothing, hygiene, and school supplies when there is a need. We will also be providing therapy; activities such as art, music, and dance therapy; as well as enhancing social skills and life skills during all activities. We have provided Easter, Back-to-school, and Christmas events for the residents of Mission Road Development Center for the past four years. <span className='italic-text' >This year we have included separate events for the community families that are referred to us.</span>
                        </p>
                    </div>
                    <div className='links'>
                        <NavLink exact='true' to='takeAction'>
                        <div className='action-button'>
                            take action
                        </div>
                        </NavLink>
                        <a href='https://www.facebook.com/rosiesgraciousheart'>
                            {/* facebook icon needs to be added*/}
                        </a>
                    </div>
            </div>
            </div>
        </>
    )
}

export default About