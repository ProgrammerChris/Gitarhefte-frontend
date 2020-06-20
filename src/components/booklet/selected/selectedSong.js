import React from 'react';
import DeleteButton from './deleteButton';

const SelectedSong = ({ isSongDeleted, artistName, songName}) => {

    const style = {
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

    return (
        <li style={{ display: "grid", gridTemplateColumns: "95% 5%", gridColumnGap: "minmax(5px, 7px)", marginLeft: "20px", marginRight: "20px" }}>
            <div style={style}>
                {songName} by {artistName}
            </div>
            <div style={{ display: "grid", justifySelf: "center", marginRight: "5px" }}>
                <DeleteButton updateList={() => isSongDeleted(true)} artist={artistName} song={songName} />
            </div>
        </li>
    )
    //TODO: Make draggable (react-dnd)
}

export default SelectedSong;