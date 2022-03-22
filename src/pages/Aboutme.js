import React from 'react'
import './Aboutme.css'
import Typical from 'react-typical'
function Aboutme() {
  return (
    <div>
    <div className='div'>
        <div className='aboutme-img'>
        <img src={require('./img/me.png')}/>
        </div>
        <div className='aboutme-details'>
        <span className='primary-text'>
                            {" "}
                            <h1>
                            <Typical 
                            loop={Infinity} 
                            steps={[
                                " About Me ",
                                1000,
                                "<h1> About Me </h1>",
                                1000,
                               "<b> About Me </b>",
                                1000,
                            ]}
                            />
                            </h1></span>
                                
            <p>I am a student at the Muhammadiyah University of Surakarta majoring in Informatics Engineering.
Previously I also studied in the RPL department.<br/>
Of course, with such a history, I have sufficient experience in the department I am in.</p><p>As a junior programmer, I'm always excited to learn something new,and always try to be a professional.</p>
        </div>
    </div></div>
  )
}

export default Aboutme