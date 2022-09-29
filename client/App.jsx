import React, { useNavigate } from 'react';
import { Routes, Route } from 'react-router-dom';

// import components here
// component A, B, C...

function App () {
    // <Link path="/users">click here for users</Link>
    return (
        <div>
            <div>hello world</div>
            <Routes>
                <Route path="/users"><UserComponent></UserComponent></Route>
                {/* <Route>add route here</Route> */}
            </Routes>
        </div>

    );
}

export default App;