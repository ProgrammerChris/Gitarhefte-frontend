import React, { Component } from 'react'

export default class Song extends Component {
    render() {
        //TODO: Add preview button
        //TODO: Add "add to booklet" button
        return (
            <li style={style}>
                {   
                    this.props.artistName,
                    this.props.songName
                }
            </li>
        )
    }
}

const style = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "50px",
    width: "100%",
    borderRadius: "15px",
    marginTop: "15px",
    boxShadow: "-5px 2px 15px 1px #805020"
}