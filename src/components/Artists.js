import React, { useState, useEffect } from "react"
import Artist from './artist'

/* 
	* Component handling search through the given JSON of artists with songs, and then showing the results. 
	* JSON to be fetched from API at the initial render of the app. Only request the list of songs if not already in local storage.
*/

const Artists = ({artists}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};

	const allArtists = Object.entries(artists) // Artists and songs supplied as prop from App. JSON gets loaded at first site load. 
	//! Cache JSON in browser for 5min? Also redis or memcache on backend anyway.

	useEffect(() => {

		// Finner artister som stemmer med søk
		let artistHits = allArtists.filter((searchResults) => (
			searchResults[0].toLowerCase().includes(searchTerm.toLowerCase())
		)).map((artist) => artist[0])

		// Leter igjennom sanger for å se om noen sanger stemmer med søk, viss ja, vis artist.
		let songHits = [];
		for (let i = 0; i < allArtists.length; i++) {
			// JSON of artists, with array of songs for each artist. Very messy way of getting the songs...
			let songs = Object.entries(allArtists[i][1])[0][1]
			for (let j = 0; j < songs.length; j++) {
				if (songs[j].toLowerCase().includes(searchTerm.toLowerCase())) {
					// Push the artist connected to the song that matched the search into the
					songHits.push(allArtists[i][0])
				}
			}
		}

		// combine search results from songs and artists
		const results = artistHits.concat(songHits)

		let resultsAsSet = new Set(results) // Converting the array to set for unique items on list. // ? Should this be set as a Set at the start instead of converting here?
		setSearchResults(Array.from(resultsAsSet))
	}, [searchTerm]);

	return (
		<div style={{ display: "grid", gridColumn: "2/5" }}>
			<input
				id="search-input"
				name="searchbar"
				type="text"
				autoComplete="on"
				onChange={handleChange}
				placeholder="Artist eller sang"
				value={searchTerm}
				style={inputStyle} />
			<ul style={{ padding: "0px" }}>
				{searchResults.map((artist) => (
					<Artist
						key={artist}
						artistName={artist}
						songs={artists[artist].songs} />
				))}
			</ul>
		</div>
	)
}

const inputStyle = {
	gridRow: "1",
	backgroundColor: "#fff",
	height: "50px",
	border: "none",
	textAlign: "center",
	borderRadius: "15px",
	boxShadow: "-5px 2px 15px 1px #805020",
	fontSize: "20px",
	fontWeight: "bold",
	outline: "none"
}
export default Artists;