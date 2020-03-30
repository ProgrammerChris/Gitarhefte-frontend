import React, { Component } from 'react'
import DeleteButton from './deleteButton'

class BookletMain extends Component {
    render() {
        return (
            <div style={style}>
                {/*TODO: Add input field for booklet name*/}
                <ul>
                    {/*TODO: Add songs to this list, together with deletebutton linked to delete the given list item*/}
                </ul>
                {/*TODO: Add captcha*/}
                {/*TODO: add email input form*/}
                {/*TODO: add preview button*/}
                {/*TODO: add send button*/}
            </div>
        )
    }
}

const style = {
    display: "grid",
    gridRow: "4",
    gridColumn: "2 / 5",
    marginTop: "20px",
    backgroundColor: "fff",
    borderRadius: "15px",
    height: "400px",
    boxShadow: "-5px 2px 15px 1px #805020",
}

export default BookletMain