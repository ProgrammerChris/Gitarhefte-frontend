import React, { Component } from "react";

class CornerButton extends Component    {
    render()    {
        return (
            <button type="button" name="corner-button" style={style}>
                <img alt="Hefte knapp" style={iconStyle} src={require("../img/booklet.svg")}/>
            </button>
        ) 
    }
} 

const style = {
    gridColumn: "4 / 5",
    gridRow: "1",
    alignSelf: "center", /* Add margin or paddin to desktop version */
    justifySelf: "end",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    background: "#F7EADC",
    borderRadius: "50%",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
    boxShadow: "-5px 2px 15px 1px #805020",
}

const iconStyle = {
    width: "25px"
}


export default CornerButton;