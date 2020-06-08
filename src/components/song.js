import React, {useState} from 'react'

const Song = (props) => {
    //TODO: Add preview button
    //TODO: Add "add to booklet" button
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
			<button type="button" onMouseOver={toggleHover} onMouseOut={unToggleHover} onClick={() => props.clicked()} style={style}>
				<div style={songStyle}>{props.songName}</div>
			</button>
		</li>
	)
}

const listElementStyle = {
	display: "grid"
}

const songStyle = {
	width: "90%"
}

export default Song;