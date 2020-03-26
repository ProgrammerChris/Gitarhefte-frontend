import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextLogo from './components/textLogo'
import CornerButton from './components/cornerbutton';
import Searchbar from './components/searchbar';
import NavBar from './components/navbar';
import Wish from './components/wish'

ReactDOM.render(
  <React.StrictMode>
    <TextLogo/>
    <CornerButton/>
    <NavBar/>
    <Searchbar/>
    {/*<Wish/> Show when Ønske is clicked*/}
    
  </React.StrictMode>,
  document.getElementById('root')
);

