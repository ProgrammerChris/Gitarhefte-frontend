import React from "react";
import TextLogo from './components/textLogo'
import CornerButton from './components/cornerbutton';
import ListView from "./components/listView";

const App = () => {

  return (
    <React.StrictMode>
      <TextLogo />
      <CornerButton />
      <ListView/>
    </React.StrictMode>
  )
}


export default App;
