import React from 'react'
import './MyWork.css'
import wall from '../../assets/wall.jpg'

const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={wall} alt='' />
        </div>
        <div className="mywork-container">
            
        </div>
        
        
    </div>
  )
}

export default MyWork