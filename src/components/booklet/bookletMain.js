import React from 'react'

const bookletMain = (props) => {
    return (
        <div style={style}>
            <h1>Test</h1>
            {/*TODO: Add input field for booklet name*/}
            <ul>
                {/*TODO: Add songs to this list, together with deletebutton linked to delete the given list item
                            Make these songs movable to choose the order they will be in the finnished booklet*/}
            </ul>
            {/*TODO: add download button*/}
        </div>
    )
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

export default bookletMain;