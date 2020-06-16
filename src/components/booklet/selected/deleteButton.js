import React, { useState } from 'react'

const DeleteButton = ({ artist, song }) => {

    const [hover, setHover] = useState(false);

    const toggleHover = () => setHover(true);
    const unToggleHover = () => setHover(false);

    const artistName = artist;
    const songName = song;

    let style;
    let iconStyle;
    if (hover) {
        iconStyle = {
            width: "30px",
            //Change color in the SVG fill.
        }
        style = {
            alignSelf: "center", /* Add margin or paddin to desktop version */
            justifySelf: "end",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            backgroundColor: "#622C06",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "-5px 2px 15px 1px #805020",
        }
    } else {
        iconStyle = {
            width: "25px",
            //Change color in the SVG fill.
        }
        style = {
            alignSelf: "center", /* Add margin or paddin to desktop version */
            justifySelf: "end",
            justifyContent: "center",
            alignItems: "center",
            width: "45px",
            height: "45px",
            backgroundColor: "#622C06",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "-5px 2px 15px 1px #805020",
        }
    }

    return (
        <div onMouseOver={toggleHover}
            onMouseOut={unToggleHover}>
            <button type="button" name="corner-button" style={style} onClick={() => deleteSong(artistName, songName)}>
                <img alt="Hefte knapp" style={iconStyle} src={require("../../../img/trash.svg")} />
            </button>
        </div>
    )
}

const deleteSong = (artistName, songName) => {
    let selectedSongs = Array.from(JSON.parse(sessionStorage.getItem('booklet')))
    let songToDelete = { artistName: artistName, songName: songName }
    console.log(selectedSongs[0])
    let newSelectedSongsList = selectedSongs.filter((song) => JSON.stringify(songToDelete) !== JSON.stringify(song));
    sessionStorage.removeItem('booklet')
    if (newSelectedSongsList.length === 0) {
        console.log("empty");
        sessionStorage.setItem('booklet', '[]')
    } else {
        console.log("object");
        sessionStorage.setItem('booklet', JSON.stringify(newSelectedSongsList))
    }
}



export default DeleteButton;
