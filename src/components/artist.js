import React, { Component } from 'react'

export default class Artist extends Component {
    render() {
        return (
            <li style={style}>
                {this.props.artist}
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
