import React from 'react'
import {Routes,Route, Link,} from 'react-router-dom'
import AdminHome from './AdminHome';
import './style.css'

const AdminNavBar = () => {
    return (
        <div>
        <nav>
                <Link to="/">Home</Link> 
                 <Link to="/food">food</Link> 
                 <Link to="/fitness">fitness</Link> 
                 <Link to="/foodrecipes">foodrecipes</Link> 
                 <span></span>
        </nav>

            <Routes>
                <Route path="/" Component={AdminHome}/>
                <Route path="/food" Component={AdminHome}/>
                <Route path="/fitness" Component={AdminHome}/>
                <Route path="/foodrecipes" Component={AdminHome}/>

            </Routes>
        </div>
    )
}

export default AdminNavBar;
