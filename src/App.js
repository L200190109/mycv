import {
    Routes, Route
}
    from 'react-router-dom';

import './App.css';
import Profile from './pages/Profile';
import Navbar from './pages/navbar'
import Aboutme from './pages/Aboutme';
import Myskill from './pages/Myskill';
import Contact from './pages/contact';

function App() {
       return(
            <div className='App'>
                <div className='bg'>
                <Navbar/>
       <Profile/>

                    <div className='responsive'>
          <Aboutme/>
          <Myskill/>
          <Contact/>
        </div>
        </div>
        </div>
    )
}

export default App
