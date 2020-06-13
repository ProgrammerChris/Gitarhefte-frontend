import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Artist = (props) => {
	const [hover, setHover] = useState(false);
	
	const toggleHover = () => setHover(true);
	const unToggleHover = () => setHover(false);

	const listElementStyle = {
		display: "grid",
	}

	const artistStyle = {
		width: "90%",
		paddingLeft: "10%"
	}

	const countStyle = {
		width: "10%",
		paddingRight: "10%"

	}

	let style; //! MinMax height for long artist names
	if (hover) {
		style = {
			display: "flex",
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
			
			<Link style={{textDecoration: "none", color: "black"}} to={`/${props.artistName}`}>
				<div 
					onMouseOver={toggleHover} 
					onMouseOut={unToggleHover} 
					style={style}>
					<div style={artistStyle}>{props.artistName}</div><div style={countStyle}>{props.songs.length}</div>
				</div>
			</Link>
		</li>
	)
}



export default Artist;