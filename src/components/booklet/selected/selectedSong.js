import React, { useState } from 'react';

const SelectedSong = ({ artistName, songName }) => {

    const [hover, setHover] = useState(false);

    const toggleHover = () => setHover(true);
    const unToggleHover = () => setHover(false);

    let style;
    if (hover) {
        style = {
            fontSize: "26px",
            backgroundColor: "#fff",
            height: "fit-content",
            maxHeight: "100px",
            borderRadius: "15px",
            boxShadow: "-5px 2px 15px 1px #805020",
            border: "none",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "50px",
            cursor: "pointer",
        }
    } else {
        style = {

            fontSize: "24px",
            backgroundColor: "#fff",
            height: "fit-content",
            maxHeight: "100px",
            borderRadius: "15px",
            boxShadow: "-5px 2px 15px 1px #805020",
            border: "none",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "50px",
        }
    }


    return (
        <li style={{display:"grid", marginLeft:"20px", marginRight:"20px"}}>
            <div style={style} onMouseOver={toggleHover} onMouseOut={unToggleHover}>{songName} by {artistName}</div>
        </li>
    )
    //TODO: List element displaying artistname and song
    //TODO: Integrated delete button
    //TODO: Make draggable (react-dnd)
}

export default SelectedSong;