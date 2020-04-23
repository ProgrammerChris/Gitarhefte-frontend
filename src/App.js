import React from 'react';
import TextLogo from './components/textLogo'
import CornerButton from './components/cornerbutton';
import Searchbar from './components/searchbar';
import NavBar from './components/navbar';
import Wish from './components/wish'
import DeleteButton from './components/booklet/deleteButton';

import data from './moch.json';
import Artist from './components/artist';

function App() {
  
  return (
    <React.StrictMode>
      <TextLogo/>
      <CornerButton/>
      <NavBar/>
      <Searchbar/>
      {/*<Wish/> Show when Ønske is clicked*/}
      <ul style={listStyle}>
        {data.map((test) => <Artist artist={test['artist']}/>)}
      </ul>
      
    </React.StrictMode>
    );
}

const listStyle = {
  padding: "0px",
  gridColumn: "2 / 5",
  gridRow: "4",
}

export default App;
