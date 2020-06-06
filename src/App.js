import React from "react";
import TextLogo from './components/textLogo'
import CornerButton from './components/cornerbutton';
import Search from './components/search';

const App = () => {

    return(
      <React.StrictMode>
      <TextLogo/>
      <CornerButton />
      <Search/>
      </React.StrictMode>
    )
}


export default App;
