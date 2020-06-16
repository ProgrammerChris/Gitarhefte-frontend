import React, { useState } from 'react';
import DeleteButton from './deleteButton';

const SelectedSong = ({ artistName, songName }) => {

    const [hover, setHover] = useState(false);

    const toggleHover = () => setHover(true);
    const unToggleHover = () => setHover(false);

    let style;
    if (hover) {
        style = {
            fontSize: "24px",
            backgroundColor: "#fff",
            height: "fit-content",
            maxHeight: "100px",
            borderRadius: "15px",
            boxShadow: "-5px 2px 15px 1px #805020",
            border: "none",
            textAlign: "center",
            lineHeight: "50px",
            cursor: "pointer",
            display: "grid",
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
            lineHeight: "50px",
            display: "grid",
            paddingLeft: "10px",
            paddingRight: "10px"
        }
    }

    return (
        <li style={{display:"grid", gridTemplateColumns:"95% 5%", gridColumnGap:"minmax(5px, 7px)", marginLeft:"20px", marginRight:"20px"}}>
            <div style={style} 
            onMouseOver={toggleHover} 
            onMouseOut={unToggleHover}>
                {songName} by {artistName}
            </div>
            <div style={{display: "grid", justifySelf: "center", marginRight: "5px"}}>
                <DeleteButton artist={artistName} song={songName} />
            </div>
        </li>
    )
    //TODO: List element displaying artistname and song
    //TODO: Integrated delete button
    //TODO: Make draggable (react-dnd)
}

export default SelectedSong;