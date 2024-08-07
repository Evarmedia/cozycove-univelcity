// import React from 'react'
import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { IoMdSearch } from "react-icons/io";

const MobileSearchBar = () => {
  const { setSearchTerm } = useContext(SearchContext);

  // function that handles the search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // navigate("/search");
  };

  return (
    <div className='flex justify-start my-2 sm:hidden px-12'>
      <div className='w-full group relative '>
        <input
          type='text'
          placeholder='Search products, brands and categories'
          className='px-8 h-8 w-full rounded-full border-gray-600 border-2 hover:border-red-300'
          onChange={handleSearch}
        />
        <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary absolute top-2 left-2' />
      </div>
    </div>
  );
};

export default MobileSearchBar;
