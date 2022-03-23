import React,{useState,useEffect} from 'react'
import './html.css'

function Html() {

  return (
    <div >
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
  <circle cx="80" cy="80" r="70" className="circle" strokeLinecap="round"  />

</svg>
    </div>
  )
}

export default Html