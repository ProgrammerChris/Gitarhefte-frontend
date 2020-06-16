import React from 'react'

const DeleteButton = ({artist, song}) => {
    return (
        <div>
            <button type="button" name="corner-button" style={style} onClick={(artist, song) => deleteSong(artist, song)}>
                <img alt="Hefte knapp" style={iconStyle} src={require("../../../img/trash.svg")}/>
            </button>
        </div>
    )
}

const deleteSong = (artist, song) => {
    sessionStorage.removeItem('booklet')
    sessionStorage.setItem('booklet', '[]')
}

const style = {
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

const iconStyle = {
    width: "25px",
    //Change color in the SVG fill.
}

export default DeleteButton;
