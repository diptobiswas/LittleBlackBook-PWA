import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './pages/Home';
import Emergency from './pages/Emergency';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main/>}>
          <Route index path="/home" element={<Home/>} />
          <Route path="emergency" element={<Emergency/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>
    </Routes>
  )
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
