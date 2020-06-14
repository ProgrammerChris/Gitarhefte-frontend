import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Artist = ({artistName, songs}) => {
	const [hover, setHover] = useState(false);
	
	const toggleHover = () => setHover(true);
	const unToggleHover = () => setHover(false);

	const listElementStyle = {
		display: "grid",
		height: "fit-content",
		maxHeight: "100px",
		paddingBottom: "15px"
	}

	const artistStyle = {
		gridColumn: "1",
		paddingLeft: "10%",
		wordWrap: "break-word"
	}

	const countStyle = {
		gridColumn: "2"
	}

	let style;
	if (hover) {
		style = {
			display: "grid",
			gridTemplateColumns: "9fr 1fr",
			fontSize: "26px",
			backgroundColor: "#ffd",
			height: "fit-content",
			width: "100%",
			borderRadius: "15px",
			boxShadow: "-5px 2px 15px 1px #805020",
			border: "none",
			textAlign: "center",
			lineHeight: "50px",
			outline: "0",
			cursor: "pointer",
		}
	} else {
			style = {
				display: "grid",
				gridTemplateColumns: "9fr 1fr",
				fontSize: "24px",
				backgroundColor: "#fff",
				height: "fit-content",
				width: "100%",
				borderRadius: "15px",
				boxShadow: "-5px 2px 15px 1px #805020",
				border: "none",
				textAlign: "center",
				lineHeight: "50px",
				outline: "0",
		}
	}

	return (
		<li style={listElementStyle}>
			
			<Link style={{textDecoration: "none", color: "black"}} to={`/${artistName}`}>
				<div 
					onMouseOver={toggleHover} 
					onMouseOut={unToggleHover} 
					style={style}>
					<div style={artistStyle}>{artistName}</div><div style={countStyle}>{songs.length}</div>
				</div>
			</Link>
		</li>
	)
}



export default Artist;