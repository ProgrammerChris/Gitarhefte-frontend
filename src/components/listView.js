import React, { useState } from 'react'
import Search from './search';
import Songs from './songs'

const ListView = () => {
  const [artistClicked, setArtistClicked] = useState(false);
  const [songs, setSongs] = useState([])

  window.onpopstate = () => {
    setArtistClicked(false);
  }

  //TODO: HANDLE REFRESH! HERE OR APP.js??

  const listStyle = {
    display: "grid",
    gridColumn: "2 / 5",
    gridTemplateRows: "2",
  }

  return (
    <div style={listStyle}>
      {artistClicked ?
        (<Songs  songs={songs}/>) :
        (<Search 
          artistClicked={(songs) => {
            setArtistClicked(true);
            setSongs(songs)
          }}/>)
      }
    </div>
  )
}

export default ListView;