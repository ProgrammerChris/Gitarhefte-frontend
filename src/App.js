import React from 'react';
import TextLogo from './components/textLogo'
import CornerButton from './components/cornerbutton';
import Searchbar from './components/searchbar';
import NavBar from './components/navbar';
import Wish from './components/wish'
import DeleteButton from './components/booklet/deleteButton';

function App() {
  
  return (
    <React.StrictMode>
      <TextLogo/>
      <CornerButton/>
      <NavBar/>
      <Searchbar/>
      {/*<Wish/> Show when Ønske is clicked*/}
      
    </React.StrictMode>
    );
}

export default App;
