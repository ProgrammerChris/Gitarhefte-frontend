import React from 'react'

const DeleteButton = ({ updateList, artist, song }) => {
    const artistName = artist;
    const songName = song;

    const deleteSong = (artistName, songName) => {
        
        let selectedSongs = Array.from(JSON.parse(sessionStorage.getItem('booklet')))
        let songToDelete = { artistName: artistName, songName: songName }
        let newSelectedSongsList = selectedSongs.filter((song) => JSON.stringify(songToDelete) !== JSON.stringify(song));
        if (newSelectedSongsList.length === 0) {
            sessionStorage.setItem('booklet', '[]') //Set list as empty if no items in it.
        } else {
            sessionStorage.setItem('booklet', JSON.stringify(newSelectedSongsList)) // Update the list in sessionstorage
        }
        updateList();
    }

    const style = {
        justifyContent: "center",
        alignItems: "center",
        width: "45px",
        height: "45px",
        backgroundColor: "#622C06",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        boxShadow: "-5px 2px 15px 1px #805020",
        outline: "none"
    }
    const iconStyle = {
        width: "25px",
        //Change color in the SVG fill.
    }

    return (
        <button type="button" name="corner-button" style={style} onClick={() => deleteSong(artistName, songName)}>
            <img alt="Hefte knapp" style={iconStyle} src={require("../../../img/trash.svg")} />
        </button>
    )
}





export default DeleteButton;
