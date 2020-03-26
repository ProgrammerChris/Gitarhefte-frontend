import React, { Component } from "react";

const menuItems = ["Ønske", "Sanger", "Om"]

class NavBar extends Component  {
    constructor(props)  {
        super(props)
        this.state = {
            selected: null
        }
    }

    clicked = (item) => {
        this.setState({
            selected: item
        })
    }
    render()    {
        return (
            
            <ul style={menuStyle}>
                <li style={{display:"block", textAlign: "start", fontWeight: this.state.selected === menuItems[0] ? 'bold' : 'normal'}} onClick={this.clicked.bind(this, menuItems[0])} key={menuItems[0]}>{menuItems[0]}</li>
                <li style={{display:"block", textAlign: "center", fontWeight: this.state.selected === menuItems[1] ? 'bold' : 'normal'}} onClick={this.clicked.bind(this, menuItems[1])} key={menuItems[1]}>{menuItems[1]}</li>
                <li style={{display:"block", textAlign: "end", fontWeight: this.state.selected === menuItems[2] ? 'bold' : 'normal'}} onClick={this.clicked.bind(this, menuItems[2])} key={menuItems[2]}>{menuItems[2]}</li>
            </ul>
        )
    }
}

const menuStyle = {
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    gridColumn: "2 / 5",
    cursor: "pointer",
    color: "#622C06"
}

export default NavBar;