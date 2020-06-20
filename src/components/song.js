import React from 'react'

let selectedSongs = Array.from(JSON.parse(sessionStorage.getItem('booklet')))

const Song = ({artistName, songName}) => {
	//TODO: Add preview button
	//TODO: Add onClicked animation. Either by floating the component to the booklet button, or just change color on button on click.

	let style = {
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
		cursor: "pointer",
	}

	const listElementStyle = {
		display: "grid",
	}

	

	// Check if song already in booklet
	const isSongInList = (newSong) => {
		for (let i = 0; i < selectedSongs.length; i++)	{
			if (JSON.stringify(selectedSongs[i]) === JSON.stringify(newSong)) {
				return true
			}
		}
		return false
	}

	// Add song to booklet
	const addToBooklet = (artistName, songName) =>	{
		selectedSongs = Array.from(JSON.parse(sessionStorage.getItem('booklet')))
		const newSong = {artistName: artistName, songName: songName}
		// See if song already in booklet
		if (!isSongInList(newSong))	{
			selectedSongs.push(newSong)
		}
		sessionStorage.setItem('booklet', JSON.stringify(selectedSongs))
	}

	return (
		<li style={listElementStyle}>
			<button onClick={() => addToBooklet(artistName, songName)} style={style}>
				{songName}
			</button>
		</li>
	)
}



export default Song;