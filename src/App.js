import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CornerButton from './components/cornerbutton';
import Booklet from "./components/booklet/booklet";
import Artists from "./components/Artists";
import Songs from "./components/songs";
import { db } from './components/firebase';
import { store } from './utils/store'

const App = () => {

  const [bookletOpen, setBookletOpen] = useState(false)
  const [data, setData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false);
  const [songsInBooklet, setSongsInBooklet] = useState(store.getState());

  // When add or delete song, update number on corner button.
  store.subscribe(() => setSongsInBooklet(store.getState()));

  // Add empty array at first page load. Ready to be filled with selected songs.
  if (!sessionStorage.getItem('booklet')) {
    sessionStorage.setItem('booklet', '[]')
    
  }

  //! TODO: Replace with CALL to server wich should have a cached version of the database at all times.
  // Get all artists and songs from database
  if (!isLoaded) {
    db.collection('Artister').doc('Artister').get().then(doc => {
      
      setData(doc.data())
      setIsLoaded(true)
      return JSON.stringify(doc.data(), null, 2)
    })
  }

  return (
    <Router>
      <Link style={logoLinkStyle} to="/" onClick={_ => setBookletOpen(false)}><h1>Gitarhefte</h1></Link>
      <Link style={bookletLinkStyle} to={{ pathname: bookletOpen ? "/" : "/booklet" }} onClick={_ => setBookletOpen(!bookletOpen)}>
        <CornerButton songsInBooklet={songsInBooklet} bookletOpen={bookletOpen} />
      </Link>
      <Routes>
        <Route path="/" element={<Artists artists={data} dataLoaded={isLoaded} />} />
        <Route path="/:artist" element={<Songs artists={data} update={(test) => console.log(test)}/>} />
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
