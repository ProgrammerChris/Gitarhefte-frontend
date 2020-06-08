import React, { useState } from 'react'

const Artist = (props) => {
	//TODO: Make clickable, show list of songs from that artist.
	const [hover, setHover] = useState(false);
	
	let toggleHover = () => setHover(true);
	let unToggleHover = () => setHover(false);

	let style;
	if (hover) {
		style = {
			display: "flex",
			gridTemplateColumns: "90vh 10vh",
			fontSize: "26px",
			backgroundColor: "#ffd",
			height: "50px",
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
				display: "flex",
				gridTemplateColumns: "90vh 10vh",
				fontSize: "24px",
				backgroundColor: "#fff",
				height: "50px",
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
			<button 
				type="button" 
				onMouseOver={toggleHover} 
				onMouseOut={unToggleHover} 
				onClick={()=> props.artistClicked()} 
				style={style}>
				<div style={artistStyle}>{props.artistName}</div><div style={countStyle}>{props.songCount}</div>
			</button>
		</li>
	)
}

const listElementStyle = {
	display: "grid"
}

const artistStyle = {
	width: "90%"
}

const countStyle = {
	width: "10%"

}

export default Artist;