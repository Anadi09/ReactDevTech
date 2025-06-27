import React from 'react'
import './About.css'
import usgs from '../../assets/usgs.jpg'
import wall from '../../assets/wall.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={usgs} alt=''/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={wall} alt='' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced FullStack developer with over the manage project</p>
                    <p>My passion for developent in Java remains one of the major platforms for developing enterprise applications. Enterprise Applications are used by large companies to make money.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React js</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java Mvc</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Spring boot</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java Script</p>
                        <hr style={{width:"75%"}}/>
                    </div>

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>60+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />


        </div>

    </div>
  )
}

export default About