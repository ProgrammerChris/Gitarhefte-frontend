import React, { Component } from "react";

class Wish extends Component    {
    render()    {
        return(
            <div style={style}>
                <form style={formStyle} id="searchbar-form" action="">
                    <input id="search-input" name="searchbar" type="search" autoComplete="off" placeholder="Artist navn" label="searchbutton" style={inputStyle}/>
                </form>
                <form style={formStyle} id="searchbar-form" action="">
                    <input id="search-input" name="searchbar" type="search" autoComplete="off" placeholder="Sang tittel" label="searchbutton" style={inputStyle}/>
                </form>
                <form style={formStyle} id="searchbar-form" action="">
                    <input id="search-input" name="searchbar" type="search" autoComplete="off" placeholder="Ultimate guitar URL" label="searchbutton" style={inputStyle}/>
                </form>
                <div style={captchaStyle}>Captcha here!</div>
                <button type="button" name="send-button" style={buttonStyle}>Send</button>
            </div>
        )
    }
}

const buttonStyle = {
    gridColumn: "1",
    gridRow: "5",
    border: "none",
    borderRadius: "15px",
    height: "30px",
    width: "100px",
    backgroundColor: "#F7EADC",
    fontWeight: "bold",
    color: "#622C06",
    justifySelf: "center",
    alignSelf:"center"
}

const captchaStyle = {
    width: "100px", 
    height: "30px", 
    backgroundColor: "#fff", 
    justifySelf: "center",
    alignSelf:"center"
}

const style = {
    display: "grid",
    gridRow: "4",
    gridColumn: "2 / 5",
    marginTop: "20px",
    backgroundColor: "#622C06",
    borderRadius: "15px",
    height: "400px",
    boxShadow: "-5px 2px 15px 1px #805020",
    justifyContent: "stretch",
}
const formStyle = {
    backgroundColor: "#fff",
    height: "50px",
    borderRadius: "15px",
    margin: "0px 20px 0px 20px",
    textAlign: "center",
    alignSelf: "center"
}

const inputStyle = {
    textAlign: "center",
    height: "50px",
    borderRadius: "10px",
    border: "none"
}

export default Wish