import React from 'react'
import Song from './song'
import { useParams } from 'react-router'


// * Component containing a list of songs from a given artists list of songs.

const Songs = ({ artists }) => {

	const { artist } = useParams()

	return (
		<div style={listStyle}>
			<h2 style={{ color: "#622C06", textAlign: "center", fontSize: "40px", margin: "0px" }}>{artist}</h2>
			<ul style={{ padding: "0px", margin: "0px" }}>
				{artists[artist] !== undefined ? artists[artist].songs.map((song) => (
					<Song
						key={song}
						songName={song}
						artistName={artist}
					/>
				)) : <div style={{textAlign:'center'}}>No artist by that name in database!</div>}
			</ul>
		</div>
	)
}

const listStyle = {
	gridColumn: "2/5"
}

export default Songs;