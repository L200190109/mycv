import {
    Routes, Route
}
    from 'react-router-dom';
import React,{useState,useEffect,useRef} from 'react'
import './App.css';
import Profile from './pages/Profile';
import Navbar from './pages/navbar'
import Aboutme from './pages/Aboutme';
import Contact from './pages/contact';
import './pages/Myskill.css'
import Typical from 'react-typical'
import {useInView} from 'react-intersection-observer'
function App() {
  const {ref:load,inView:visible}=useInView()
    const [defult, setDefult] = useState()
    const mySkill= useRef()
      useEffect(() => {
     const observer = new IntersectionObserver((entries)=>{
       const entry=entries[0]
       setDefult(entry.isIntersecting)
     })
     observer.observe(mySkill.current)
      }, [])
      
       return(
            <div className='App'>
                <div className='bg'>
                <Navbar/>
      

                    <div className='responsive'>
                    <Profile/>       
          <Aboutme/>

         <div >
         <div className='br' id='myskill'>
        <div className='skill'>
            <span> {" "}
                
                    <Typical loop={Infinity}
                        steps={
                            [" This is my skills ", 1000, " I always increase my skills ", 1000]
                        }/>
               
            </span>
        </div>
        <div className='div-card'>
            <div className='card' ref={mySkill}>
              <div className='skill-logo'><img src={require('./pages/logo/html.png')}/></div>
              <div className='outer-circle'>
                    <div className='inner-circle'>
                        <div id='value'>90%</div>
                    </div>
                </div>
                <svg width="160px" height="160px">
			<defs>
    <linearGradient id="linear" >
      <stop offset="0%"   stopColor="rgb(233, 27, 181);"/>
      <stop offset="100%" stopColor="rgb(184, 15, 141)"/>
    </linearGradient>
  </defs>
  <circle cx="80" cy="80" r="70" className={defult ? 'circle-html': 'default'} strokeLinecap="round"  />
</svg>
            </div>
            <div className='card'>
            <div className='skill-logo'><img src={require('./pages/logo/css.png')}/></div>
            <div className='outer-circle'>
                    <div className='inner-circle'>
                        <div id='value'>70%</div>
                    </div>
                </div>
                <svg width="160px" height="160px">
			<defs>
    <linearGradient id="linear2" >
      <stop offset="0%"   stopColor="rgb(233, 27, 181);"/>
      <stop offset="100%" stopColor="rgb(184, 15, 141)"/>
    </linearGradient>
  </defs>
 <circle cx="80" cy="80" r="70" className={defult ? 'circle-css': 'default'} strokeLinecap="round"  />

 </svg>

            </div>
            <div className='card'>
            <div className='skill-logo'><img src={require('./pages/logo/php.png')}/></div>
            <div className='outer-circle'>
                    <div className='inner-circle'>
                        <div id='value'>85%</div>
                    </div>
                </div>
                <svg width="160px" height="160px">
			<defs>
    <linearGradient id="linear" >
      <stop offset="0%"   stopColor="rgb(233, 27, 181);"/>
      <stop offset="100%" stopColor="rgb(184, 15, 141)"/>
    </linearGradient>
  </defs>
  <circle cx="80" cy="80" r="70" className={defult ? 'circle-php': 'default'} strokeLinecap="round"  />

</svg>
            </div>
            <div className='card'>
            <div className='skill-logo'><img src={require('./pages/logo/react.png')}/></div>
            <div className='outer-circle'>
                    <div className='inner-circle'>
                        <div id='value'>60%</div>
                    </div>
                </div>
                <svg width="160px" height="160px">
			<defs>
    <linearGradient id="linear" >
      <stop offset="0%"   stopColor="rgb(233, 27, 181);"/>
      <stop offset="100%" stopColor="rgb(184, 15, 141)"/>
    </linearGradient>
  </defs>
  <circle cx="80" cy="80" r="70" className={defult ? 'circle-react': 'default'} strokeLinecap="round"  />

</svg>
            </div>
        </div>
        </div>
          </div>




          <Contact/>
        </div>
        </div>
        </div>
    )
}

export default App
