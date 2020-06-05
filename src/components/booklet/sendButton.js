import React from 'react'

const SendButton = (props) => {

    return (
        <button type="button" name="send-button" style={buttonStyle}>Send</button>
    )
}

// Add props to take a function to decide what happens onClick. Since one will send the bookle tto the user, and another send button will send a wish to the developer.

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

//Use prop types to get button width and assure it is a number. Then cast to string and add "px" so it can be used in the JSX style.

export default SendButton
