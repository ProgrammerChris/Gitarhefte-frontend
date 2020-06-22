import React from "react";

const CornerButton = () => {
    
    const iconStyle = {
        width: "25px"
    }
	const style = {
        display:"flex",
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
    
    return (
        <button className="corner-button" style={style} onClick={() => console.log(window.location.href)}>
            <img alt="Hefte knapp" style={iconStyle} src={require("../img/booklet.svg")}/>
        </button>
    ) 
} 




export default CornerButton;