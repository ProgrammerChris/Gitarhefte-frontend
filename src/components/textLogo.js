import React, { Component }from 'react';

class TextLogo extends Component{
    render()    {
        return (
            
            <div id="text-logo" style={style}>
                <h1>Gitarhefte</h1>
            </div>
        )
    }
}

const style = {
    gridColumn: "2 / 4",
    gridRow: "1",
}


export default TextLogo;