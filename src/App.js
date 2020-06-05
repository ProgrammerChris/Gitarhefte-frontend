import React from "react";
import TextLogo from './components/textLogo'
import CornerButton from './components/cornerbutton';
import Searchbar from './components/searchbar';
import SearchResults from './components/searchResults'
import BookletMain from "./components/booklet/bookletMain";
import searchResults from "./components/searchResults";

const App = () => {
  
    return(
      <React.StrictMode>
      <TextLogo/>
      <CornerButton />
      <Searchbar/>
      <SearchResults/>
      </React.StrictMode>
    )
}



export default App;
