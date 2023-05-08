import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import Emergency from './Emergency';
import Main from './Main';
import Search from './Search';
import Saved from './Saved';
import Resources from './Resources';
import Profile from './Profile';
import Featured from './Featured';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';

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
          <Route path="Featured" element={<Featured/>} />
          <Route path="Sarnia Sting at Kitchenr Rangers" element={<Event1/>} />
          <Route path="Larry's Jazz Guys" element={<Event2/>} />
          <Route path="Manduppal" element={<Event3/>} />
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
