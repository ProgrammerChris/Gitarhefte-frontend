import React from 'react'
import Song from './song'

const Songs = (props) => {
	return (
			<ul style={listStyle}>
				{props.songs.map((song) => (
					<Song
						key={song}
						songName={song}
					/>
				))}
			</ul>
	)
}

const listStyle = {
	padding: "0px",
	gridRow: "2",
}

export default Songs;