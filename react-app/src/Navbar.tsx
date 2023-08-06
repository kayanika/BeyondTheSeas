/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ChangeEvent, useState } from 'react';
import Logo from './anika.png';

function Navbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSearchIconClick = () => {
    // Implement the logic to handle the search icon click if needed
    console.log('Search icon clicked');
  };
  return (
    <nav>
      <div className="flex items-center justify-between fixed top-0 z-30 w-full py-6">
        <div className="flex items-center w-5/6 mx-auto">
          <div>
            <Link to="/">
              <img alt="logo" src={Logo} className="h-10" />
            </Link>
          </div>
          {/* Search bar on the right */}
          <form className="flex-grow flex items-center px-4 py-2 bg-gray-200 rounded-full">
            {/* <label htmlFor="searching" className="sr-only">
              Search
            </label> */}
            <div className="relative">
              <input
                type="search"
                id="searching"
                placeholder="Search for a Specialized..."
                value={searchValue}
                onChange={handleChange}
                required
                className="w-40 bg-transparent outline-none text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleSearchIconClick}
                className="text-white absolute right-2.5 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
