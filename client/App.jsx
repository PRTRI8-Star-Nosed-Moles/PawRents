import React, { useNavigate } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import { Signup } from './components/homepage/Signup';

// import components here
// component A, B, C...

function App () {
    // <Link path="/users">click here for users</Link>
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                {/* <Route>add route here</Route> */}
            </Routes>
        </div>

    );
}

export default App;