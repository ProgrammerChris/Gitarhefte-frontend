import React, { useState } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const Booklet = () => {

    const [selectedSongs, setSelectedSongs] = useState(Array.from(JSON.parse(sessionStorage.getItem('booklet'))))

    const SortableItem = SortableElement(({ song, index }) =>
        <li style={listElementStyle}>
            <div style={style}>
                {song['songName']} by {song['artistName']}
            </div>
        </li >
    );

    const SortableList = SortableContainer(({ songs }) => {
        if (songs.length > 0) {
            return (
                <ul style={songListStyle}>
                    {songs.map((song, index) => (<SortableItem key={`id-${index}`} index={index} song={song} />))}
                </ul>
            );
        } else {
            return (
            <ul style={songListStyle}>
                <li style={{display:"inline-grid", fontSize:"24px", paddingLeft: "25px",justifyContent: "center"}}><h4>Ingen sanger valgt!</h4></li>
            </ul>
            );
        }
    });

    const deleteButtons = (song, index) =>
        <li key={`id-${index}`} style={{ display: "grid" }}>
            <button type="button" name="corner-button" style={deleteStyle} onClick={() => remove(song)}>
                <img alt="Hefte knapp" style={iconStyle} src={require('../../img/trash.svg')} />
            </button>
        </li>

    const remove = (song) => {
        const index = selectedSongs.indexOf(song);
        if (index > -1) {
            selectedSongs.splice(index, 1);
        }
        sessionStorage.setItem('booklet', JSON.stringify(selectedSongs))
        setSelectedSongs(Array.from(JSON.parse(sessionStorage.getItem('booklet'))))

    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const newSelectedSongs = arrayMove(selectedSongs, oldIndex, newIndex)
        setSelectedSongs(newSelectedSongs)
        sessionStorage.setItem('booklet', JSON.stringify(newSelectedSongs))
    };

    return (
        <div id="booklet" style={{ display: "grid", gridColumn: "2/5", gridTemplateColumns: "auto 25% auto" }}>
            <input
                id="name-input"
                name="bookletName"
                type="text"
                placeholder="Hefte navn"
                style={inputStyle} />
            <div style={textStyle}><h3>Valgte sanger</h3></div>
            <div id="list" style={{ display: "grid", gridRow: "3", gridColumn: "1/4", gridTemplateColumns: "6fr auto", gridTemplateRows: "1" }}>
                <SortableList songs={selectedSongs} onSortEnd={onSortEnd}></SortableList>
                <ul style={buttonListStyle}>
                    {selectedSongs.map((song, index) => deleteButtons(song, index))}
                </ul>
            </div>
            <button style={buttonStyle}>Last ned hefte</button>
        </div>
    )
}

const textStyle = {
    gridRow: "2",
    gridColumn: "1/4",
    textAlign: "center",
    marginTop: "15px",
    fontSize: "26px",
    fontWeight: "Bold",
    color: "#622C06"
}

const inputStyle = {
    gridRow: "1",
    gridColumn: "1/4",
    backgroundColor: "#fff",
    height: "50px",
    border: "none",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "-5px 2px 15px 1px #805020",
    fontSize: "20px",
    fontWeight: "bold",
    outline: "none",
}

const songListStyle = {
    display: "grid",
    gridRowGap: "20px",
    gridRow: "3",
    padding: "0px",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginTop: "0px",

}

const buttonListStyle = {
    display: "grid",
    gridRowGap: "20px",
    gridRow: "3",
    padding: "0px",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginTop: "0px",
    paddingLeft: "20px"
}

const listElementStyle = {
    display: "grid",
    marginLeft: "20px",
    marginRight: "30px",
    cursor: "move"
}

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
    paddingLeft: "10px",
    paddingRight: "10px",
    width: "100%",
    userSelect: "none"
}

const deleteStyle = {
    gridColumn: "2",
    justifySelf: "center",
    marginRight: "10px",
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

const buttonStyle = {
    gridRow: "4",
    gridColumn: "2",
    display: "inline-block",
    borderRadius: "15px",
    border: "none",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "-5px 2px 15px 1px #805020",
    fontSize: "20px",
    height: "50px",
    outline: "none",
    cursor: "pointer",
}

export default Booklet;