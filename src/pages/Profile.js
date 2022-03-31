import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
function Profile() {
  return (
    <div id='profile'>
        <div className='container1'>
    
                    <div className='profile-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello,<br/> I'm <span className='bold-text'><b>Maulana</b></span>
                        </span>
                    
                        <span className='primary-text'>
                            {" "}
                            <b>
                            <Typical 
                            loop={Infinity} 
                            steps={[
                                "Full Stack developer",
                                1000,
                                "Level Junior",
                                1000,
                                "Ready for the challenge",
                                1000,
                                "And learn new things.",
                                1000,
                               

                            ]}
                            />
                            </b></span>
                        <span className='span'>
                            Learn of building applications with frontend and backend operations.

                            </span>
                            <div className='div-cv'>
                 
                   <a className='button' href='mycv.pdf' download='Maulana mycv.pdf'><b> Get Resume</b></a>

               </div>
                    </div>

                    <div className='profile-img'>
                        <img src={require("./img/kartun1.png")}/>
                    </div>
                    
                </div>
               
            </div>
        
  )
}

export default Profile