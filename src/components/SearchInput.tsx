import React, { FC } from "react";

interface SearchInputProps {
  setSearchTerm: (term: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ setSearchTerm }) => {
  return (
    <div className="mb-2">
      <label htmlFor="search-input">Search For Product:</label>
      <div className="search-wrapper">
        <input
          type="text"
          id="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button">Search</button>
      </div>
    </div>
  );
};

export default SearchInput;
