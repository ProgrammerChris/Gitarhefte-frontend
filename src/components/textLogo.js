import React from 'react';

const TextLogo = () => {
    /* TODO: onClick, go back to "home" page */
    return (
        <div id="text-logo" style={style}>
            <h1>Gitarhefte</h1>
        </div>
    );
};

const style = {
    gridColumn: "2 / 4",
    gridRow: "1",
}

export default TextLogo;

