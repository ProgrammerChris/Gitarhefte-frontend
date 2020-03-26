import React, { Component } from "react"

class Searchbar extends Component   {
    render()    {
        return (
            <form style={formStyle} id="searchbar-form" action="">
                <input id="search-input" name="searchbar" type="search" autoComplete="off" placeholder="Artist eller sang" label="searchbutton" style={inputStyle}/>
                <button style={buttonStyle} type="submit" id="searchbutton" name="searchbutton"><i className="fa fa-search"></i></button>
            </form>
        )
    }
}

const formStyle = {
    display: "grid",
    gridTemplateColumns: "auto 50px",
    gridTemplateRows: "none",
    gridColumn: "2 / 5",
    gridRow: "3",
    backgroundColor: "#fff",
    height: "50px",
    borderRadius: "15px",
    marginTop: "15px",
    boxShadow: "-5px 2px 15px 1px #805020"
}

const inputStyle = {
    textAlign: "center",
    textIndent: "50px",
    height: "50px",
    borderRadius: "10px",
    border: "none"
}

const buttonStyle = {
    gridColumn: "2",
    borderRadius: "50%",
    alignSelf: "center",
    marginRight: "10px",
    cursor:" pointer",
    color: "#000",
    border: "#fff",
    backgroundColor: "#fff",
    fontSize: "30px",
    textAlign: "center",
}

export default Searchbar;