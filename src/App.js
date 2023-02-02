import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './pages/Home';
import Emergency from './pages/Emergency';
import Main from './pages/Main';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Event from './pages/Event';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import { EventCardExpanded } from './ui-components';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path="search" element={<Search/>} />
          <Route path="emergency" element={<Emergency/>} />
          <Route path="saved" element={<Saved/>} />
          <Route path="Resources" element={<Resources/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="event/:slug" element={<Event/>} />
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
