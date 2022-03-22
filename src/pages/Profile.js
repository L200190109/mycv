import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
function Profile() {
  return (
    <div>
        <div className='container'>
    
                    <div className='profile-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello,<br/> I'm <span className='bold-text'><b>Maulana</b></span>
                        </span>
                    
                        <span className='primary-text'>
                            {" "}
                            <p><b>
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
                            </b></p></span>
                        <span className='profile-role-tagline'>
                            Learn of building applications with front end and back end operations.

                            </span>
                        
                    </div>

                    <div className='profile-img'>
                        <img src={require("./img/kartun1.png")}/>
                    </div>
                    
                </div>
               
            </div>
        
  )
}

export default Profile