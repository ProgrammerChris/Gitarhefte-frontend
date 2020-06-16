import React, { useState } from 'react'
import SelectedSong from '../components/booklet/selected/selectedSong';

const Booklet = (props) => {

    const [hover, setHover] = useState(false);

    let toggleHover = () => setHover(true);
    let unToggleHover = () => setHover(false);

    let buttonStyle;
    if (hover) {
        buttonStyle = {
            gridRow: "4",
            gridColumn: "2/3",
            display: "block",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "#fff",
            textAlign: "center",
            boxShadow: "-5px 2px 15px 1px #805020",
            fontSize: "22px",
            height: "50px",
            outline: "none",
            cursor: "pointer",
            width: "100%"
        }
    } else {
        buttonStyle = {
            gridRow: "4",
            gridColumn: "2/3",
            display: "block",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "#fff",
            textAlign: "center",
            boxShadow: "-5px 2px 15px 1px #805020",
            fontSize: "20px",
            height: "50px",
            outline: "none",
            width: "100%"
        }
    }

    
    const selected = Array.from(JSON.parse(sessionStorage.getItem('booklet')));

    return (
        <div style={{ display: "grid", gridTemplateColumns:"auto 50% auto", gridColumn:"2/5"}}>
            <input
                id="name-input"
                name="bookletName"
                type="text"
                placeholder="Hefte navn"
                style={inputStyle} />
            <div style={textStyle}>Valgte sanger</div>
            <ul style={listStyle}>
                {selected.map((song) => <SelectedSong key={song['songName']+song['artistName']} songName={song['songName']} artistName={song['artistName']}/>)}
            </ul>
            <button style={buttonStyle} onMouseOver={toggleHover} onMouseOut={unToggleHover}>Last ned hefte</button>
        </div>
    )
}

const textStyle = {
    gridRow:"2", 
    gridColumn:"2/3", 
    textAlign:"center", 
    marginTop:"15px", 
    fontSize:"26px",
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

const listStyle = {
    display: "grid",
    gridRowGap: "20px",
    gridRow: "3",
    gridColumn: "1/4",
    padding: "0px",
    height: "fit-content",
    maxHeight: "60vh",
    overflowY: "auto",
    overflowX: "hidden",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginTop:"0px",
}



export default Booklet;