import React, { useState, useEffect, useRef } from 'react';
import user from '../../images/user.jpg';
{/* ------------------User Icon-----------------*/}
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src={user}
          alt="user photo"
        />
      </button>
      {isOpen && (
        <div
          id="dropdownAvatar"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 right-0"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>firstName lastName</div>
            <div className="font-medium truncate">name@domain.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                My Info
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
