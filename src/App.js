import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CornerButton from './components/cornerbutton';
import Booklet from "./components/booklet/booklet";
import Artists from "./components/Artists";
import Songs from "./components/songs";

import data from './moch.json';  //TODO: Get JSON from API and store in localStorage

const App = () => {

  const [bookletOpen, setBookletOpen] = useState(false)

  // TODO: Make cornerbutton booklet on all pages except on booklet page. Make it search button on booklet page.

  // Add empty array at first page load. Ready to be filled with selected songs.
  if (!sessionStorage.getItem('booklet')) {
    sessionStorage.setItem('booklet', '[]')
  }

  return (
    <Router>
      <Link style={logoLinkStyle} to="/" onClick={_ => setBookletOpen(false)}><h1>Gitarhefte</h1></Link>
      <Link 
      style={bookletLinkStyle} 
      to={{
        pathname: bookletOpen ? "/" : "/booklet"
        }}
      onClick={_ => setBookletOpen(!bookletOpen)}
      >
      <CornerButton bookletOpen={bookletOpen}/>
      </Link>
      <Routes>
        <Route path="/" element={<Artists artists={data} />} />
        <Route path="/:artist" element={<Songs artists={data} />} />
        <Route path="booklet" element={<Booklet />} />
      </Routes>
    </Router>
  )
}

const bookletLinkStyle = {
  textDecoration: "none",
  gridColumn: "4",
  gridRow: "1",
  justifySelf: "end",
}

const logoLinkStyle = {
  justifySelf: "start",
  textDecoration: "none",
  gridColumn: "2",
  gridRow: "1",
}




export default App;
