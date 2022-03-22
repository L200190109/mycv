import {
    Routes, Route
}
    from 'react-router-dom';

import './App.css';
import Profile from './pages/Profile';
import Navbar from './pages/navbar'
import Aboutme from './pages/Aboutme';
import Myskill from './pages/Myskill';


function App() {
       return(
            <div className='App'>
                <div className='bg'>
           <Navbar/>
           <Profile/>
           <Aboutme/>
           <Myskill/>
        </div>
        </div>
    )
}

export default App
