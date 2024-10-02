import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (option) => {
    return sortBy === option ? 'active' : '';
  };

  // Update the selected sorting option
  const handleSortByChange = (option) => {
    setSortBy(option);
  };

  // Update search term based on input
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  // Update location based on input
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Trigger the search when the button is clicked
  const handleSearch = (event) => {
    onSearch(term, location, sortBy);
    event.preventDefault(); // Prevent page reload
  };

  // Render sorting options dynamically from the sortByOptions object
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((option) => {
      const value = sortByOptions[option];
      return (
        <li
          key={value}
          className={getSortByClass(value)}
          onClick={() => handleSortByChange(value)}
        >
          {option}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
