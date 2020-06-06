import React from 'react'

const artist = (props) => {
    //TODO: Make clickable, show list of songs from that artist.
    return (
        <li style={style}>
            <div style={styleArtistname}>{props.artistName}</div>
            <div style={styleSongCount}>{props.songCount}</div>
        </li>
    )
}

const style = {
    display: "grid",
    gridTemplateColumns: "10",
    fontSize: "24px",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "50px",
    width: "100%",
    borderRadius: "15px",
    marginTop: "15px",
    boxShadow: "-5px 2px 15px 1px #805020"
}

const styleArtistname = {
    gridColumn: "1/10",
    justifySelf: "center"
}

const styleSongCount = {
    gridColumn: "10"
}

export default artist;