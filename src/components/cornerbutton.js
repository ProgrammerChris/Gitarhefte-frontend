import React from "react";

const CornerButton = ({ bookletOpen, songsInBooklet }) => {

    const NumberOfSongsInBooklet = () => 
        songsInBooklet > 0 && !bookletOpen ? <div style={numberInBookletStyle}>{songsInBooklet}</div> : null

    return (
        <div>
            <button className="corner-button" style={style}>
                <img
                    alt="Hefte knapp"
                    style={iconStyle}
                    src={bookletOpen ?
                        require("../img/magnifying_glass_icon.svg") :
                        require("../img/booklet.svg")} />
            </button>
            {NumberOfSongsInBooklet()}
        </div>
    )
}

const numberInBookletStyle = {
    height: "20px",
    width: "20px",
    color: "#F7EADC",
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
    backgroundColor: "#622C06",
    borderRadius: "45px",
    position: "relative",
    top: "-15px",
    left: "35px"
}

const iconStyle = {
    width: "25px"
}
const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    background: "#F7EADC",
    borderRadius: "50%",
    marginTop: "30px",
    border: "none",
    boxShadow: "-5px 2px 15px 1px #805020",
    cursor: "pointer",
    outline: "none"
}


export default CornerButton;