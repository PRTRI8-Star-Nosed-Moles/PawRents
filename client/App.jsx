import React, { useNavigate } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import { Signup } from './components/homepage/Signup';
import { Navbar } from './components/homepage/Navbar';
import { Marketplace } from './components/marketplace/Marketplace';
import { Account } from './components/account/Account';

// import components here
// component A, B, C...

function App () {
    // <Link path="/users">click here for users</Link>
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/marketplace" element={<Marketplace/>}></Route>
                <Route path="/account" element={<Account/>}></Route>
                {/* <Route>add route here</Route> */}
            </Routes>
        </div>

    );
}

export default App;