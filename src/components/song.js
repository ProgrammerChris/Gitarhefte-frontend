import React, { useState } from 'react'

const Song = ({artistName, songName}) => {
	//TODO: Add preview button
	//TODO: Add "add to booklet" button
	const [hover, setHover] = useState(false);

	let toggleHover = () => setHover(true);
	let unToggleHover = () => setHover(false);

	let style; //! MinMax height for long song names
	if (hover) {
		style = {
			fontSize: "26px",
			backgroundColor: "#ffd",
			height: "fit-content",
			maxHeight: "100px",
			width: "100%",
			borderRadius: "15px",
			marginTop: "15px",
			boxShadow: "-5px 2px 15px 1px #805020",
			border: "none",
			textAlign: "center",
			verticalAlign: "middle",
			lineHeight: "50px",
			outline: "0",
			cursor: "pointer",
		}
	} else {
		style = {
			fontSize: "24px",
			backgroundColor: "#fff",
			height: "fit-content",
			maxHeight: "100px",
			width: "100%",
			borderRadius: "15px",
			marginTop: "15px",
			boxShadow: "-5px 2px 15px 1px #805020",
			border: "none",
			textAlign: "center",
			verticalAlign: "middle",
			lineHeight: "50px",
			outline: "0",
		}
	}

	return (
		<li style={listElementStyle}>
			<div onMouseOver={toggleHover} onMouseOut={unToggleHover} onClick={() => console.log(songName + " by " + artistName)} style={style}>
				{songName}
			</div>
		</li>
	)
}

const listElementStyle = {
	display: "grid",
}

export default Song;