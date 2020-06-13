import React, { useState, useEffect } from "react"
import Artist from './artist'
import {Outlet} from 'react-router-dom'

/* 
	* Component handling search through the given JSON of artists with songs, and then showing the results. 
	* JSON to be fetched from API at the initial render of the app. Only request the list of songs if not already in local storage.
*/

const Artists = (props) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};
	
	const allArtists = Object.entries(props.artists)

	useEffect(() => {

		// Finner artister som stemmer med søk
		let artistHits = allArtists.filter((searchResults) => (
			searchResults[0].toLowerCase().includes(searchTerm.toLowerCase())
		))

		artistHits.filter((artist)=> artist[0])

		// Leter igjennom sanger for å se om noen sanger stemmer med søk, viss ja, vis artist.
		let songHits = [];
		for (let i = 0; i < allArtists.length; i++)	{
			let songs = Object.entries(allArtists[i][1])[0][1]
			for (let j = 0; j < songs.length; j++)	{
				if (songs[j].toLowerCase().includes(searchTerm.toLowerCase()))	{
					songHits.push(allArtists[i][0])
				}
				
			}
		}

		// combine search results from songs and artists
		const results = artistHits.map((artist)=> artist[0]).concat(songHits)

		let resultsAsSet = new Set(results) // Converting the array to set for unique items on list. // ? Should this be set as a Set at the start instead of converting here?
		setSearchResults(Array.from(resultsAsSet))
	}, [searchTerm]);

	return (
		<div style={{display: "grid", gridColumn:"2/5"}}>
			<input
				id="search-input"
				name="searchbar"
				type="text"
				autoComplete="off"
				onChange={handleChange}
				placeholder="Artist eller sang"
				value={searchTerm}
				style={inputStyle} />
			<ul style={{padding:"0px"}}>
				{searchResults.map((artist) => (
					<Artist 
						key={artist}
						artistName={artist}
						songs={props.artists[artist].songs} />
				))}
			</ul>
			<Outlet />
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