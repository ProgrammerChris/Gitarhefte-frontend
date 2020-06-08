import React, {useState} from "react";

const CornerButton = () => {
    // TODO: Make booklet button on all pages except on booklet page. Make it search button on booklet page.
    const [hover, setHover] = useState(false);
	
	let toggleHover = () => setHover(true);
	let unToggleHover = () => setHover(false);

    let iconStyle;
	let style;
	if (hover) {
		style = {
			gridColumn: "4 / 5",
            gridRow: "1",
            alignSelf: "center", /* Add margin or padding to desktop version */
            justifySelf: "end",
            justifyContent: "center",
            alignItems: "center",
            width: "55px",
            height: "55px",
            background: "#F7EADC",
            borderRadius: "50%",
            marginTop: "20px",
            border: "none",
            cursor: "pointer",
            boxShadow: "-5px 2px 15px 1px #805020",
        }
        iconStyle = {
            width: "30px"
        }
	} else {
        style = {
            gridColumn: "4 / 5",
            gridRow: "1",
            alignSelf: "center", /* Add margin or padding to desktop version */
            justifySelf: "end",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            background: "#F7EADC",
            borderRadius: "50%",
            marginTop: "20px",
            border: "none",
            boxShadow: "-5px 2px 15px 1px #805020",
        }
        iconStyle = {
            width: "25px"
        }
	}
    
    return (
        <button type="button" name="corner-button" onMouseOver={toggleHover} onMouseOut={unToggleHover} style={style}>
            <img alt="Hefte knapp" style={iconStyle} src={require("../img/booklet.svg")}/>
        </button>
    ) 
} 




export default CornerButton;