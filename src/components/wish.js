import React, { Component } from "react";
import SendButton from './sendButton'

class Wish extends Component    {
    render()    {
        return(
            <div style={style}>
                <form style={formStyle} id="artist-name-form" action="">
                    <h2>Ønske</h2>
                    <input style={fieldStyle} id="artist-name--input" name="artist-input-field" type="input" autoComplete="off" placeholder="Artist navn"/>
                    <input style={fieldStyle} id="song-name-input" name="song-input-field" type="input" autoComplete="off" placeholder="Sang tittel"/>
                    <input style={fieldStyle} id="url-input" name="url-input-field" type="input" autoComplete="off" placeholder="Ultimate guitar URL"/>
                    <div style={captchaStyle}>Captcha here!</div>
                    <SendButton/>
                </form>
            </div>
        )
    }
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
}
const formStyle = {
    display: "grid",
    height: "50px",
    borderRadius: "15px",
    margin: "0px 20px 0px 20px",
}

const fieldStyle = {
    textAlign: "center",
    height: "50px",
    border: "none",
    borderRadius: "10px",
    marginBottom: "15px",
}

const captchaStyle = {
    width: "100px", 
    height: "30px", 
    backgroundColor: "#fff", 
    justifySelf: "center",
    alignSelf:"center"
}

export default Wish