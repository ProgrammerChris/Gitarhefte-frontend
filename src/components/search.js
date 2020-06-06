import React, {useState, useEffect} from "react"
import data from '../moch.json';
import Artist from './artist'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        // Data = JSON med artister og sanger

        // Finner artister som stemmer med søk
        let results = data.filter((searchResults) => (
            searchResults.artist.toLowerCase().includes(searchTerm.toLowerCase())    
        ))

        // Leter igjennom sanger for å se om noen sanger stemmer med søk, viss ja, vis artist.
        for(let i = 0; i < data.length; i++)   {
            for(let j = 0; j < data[i].songs.length; j++)    {
                if (data[i].songs[j].toLowerCase().includes(searchTerm.toLowerCase()))  {
                    results.push(data[i])
                }
            }
        }
        let resultsAsSet = new Set(results) //For å gjøre listen uten gjentagelser av samme artisten.
        
        setSearchResults(Array.from(resultsAsSet));
    }, [searchTerm]);

    return (
        <div style={search}> 
            <input 
            id="search-input" 
            name="searchbar" 
            type="text" 
            autoComplete="off" 
            onChange={handleChange} 
            placeholder="Artist eller sang" 
            value={searchTerm} 
            style={inputStyle}/>
            <ul style={listStyle}>
                {searchResults.map((searchHit) => (
                    <Artist key={searchHit['artist']} artistName={searchHit['artist']} songCount={searchHit['songs'].length}/>
                ))}
            </ul>
        </div>
    )
}

const search = {
    display: "grid",
    gridColumn: "2 / 5",
    gridTemplateRows: "2",
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

const listStyle = {
    padding: "0px",
    gridRow: "2",
  }
export default Search;