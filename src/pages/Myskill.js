import React,{useState,useEffect} from 'react'
import './Myskill.css'
import Typical from 'react-typical'
import Html from './skill/html'
import Css from './skill/css'
import Php from './skill/php'
import Javascript from './skill/javascript'
function Myskill() {
 
    
  
    
    return (
    <div className='br' id='myskill'>
        <div className='skill'>
            <span> {" "}
                <p><b>
                    <Typical loop={Infinity}
                        steps={
                            [" This is my skills ", 1000, " I always increase my skills ", 1000,]
                        }/>
                </b></p>
            </span>
        </div>
        <div className='div-card'>
            <div className='card'>
              <div className='skill-logo'><img src={require('./logo/html.png')}/></div>
              <Html/>
            </div>
            <div className='card'>
            <div className='skill-logo'><img src={require('./logo/css.png')}/></div>
              <Css/>
            </div>
            <div className='card'>
            <div className='skill-logo'><img src={require('./logo/php.png')}/></div>
              <Php/>
            </div>
            <div className='card'>
            <div className='skill-logo'><img src={require('./logo/react.png')}/></div>
              <Javascript/>
            </div>
        </div>
        </div>
        )
        }
        
        export default Myskill
