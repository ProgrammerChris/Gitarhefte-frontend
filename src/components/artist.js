import React from 'react'

const artist = (props) => {
    //TODO: Make clickable, show list of songs from that artist.
    return (
        <li style={style}>
            {props.artistName}
        </li>
    )
}

const style = {
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "50px",
    width: "100%",
    borderRadius: "15px",
    marginTop: "15px",
    boxShadow: "-5px 2px 15px 1px #805020"
}

export default artist;