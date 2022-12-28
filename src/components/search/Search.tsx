import React from 'react'
import { SearchProps } from '../types';

const Search: React.FC<SearchProps> = ({searchTerm, setSearchTerm, isSorted, setIsSorted}) => {
  return (
    <div className="mx-auto w-1/2 flex mt-2">
          <input type="text" placeholder="Enter something to search.." className="border-2 border-gray p-2 w-full" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        </div>
  )
}

export default Search;