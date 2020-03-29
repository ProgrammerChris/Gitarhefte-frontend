import React from 'react'

const SendButton = (props) => {
    return (
        <button type="button" name="send-button" style={buttonStyle}>Send</button>
    )
}

const buttonStyle = {
    border: "none",
    borderRadius: "15px",
    height: "30px",
    width: "100px",
    backgroundColor: "#F7EADC",
    fontWeight: "bold",
    color: "#622C06",
    justifySelf: "center",
    alignSelf:"center",
    marginTop: "15px" 
}

export default SendButton
