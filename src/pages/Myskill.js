import React,{useState,useEffect} from 'react'
import './Myskill.css'
import Typical from 'react-typical'
import Html from './skill/html'
import Css from './skill/css'
import Php from './skill/php'
import Javascript from './skill/javascript'
function Myskill() {
 
    
  
    
    return (
    <div>
        <div className='skill'>
            <span> {" "}
                <h1>
                    <Typical loop={Infinity}
                        steps={
                            [" This is my skills ", 1000, " Of course I always increase my skills ", 1000,]
                        }/>
                </h1>
            </span>
        </div>
        <div className='div'>
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
