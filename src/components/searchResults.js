import React from 'react';
import data from '../moch.json';
import Artist from './artist';

const searchResults = (props) => {
    return (
        
        <ul style={listStyle}>
            {data.map((moch) => (
                <Artist key={moch['artist']} artistName={moch['artist']}/>
            ))}
        </ul>
    );
};

const listStyle = {
    padding: "0px",
    gridColumn: "2 / 5",
    gridRow: "4",
  }

export default searchResults;