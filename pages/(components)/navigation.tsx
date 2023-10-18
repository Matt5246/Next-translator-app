import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-black bg-opacity-10 z-10 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">Translator</div>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-300" href="#">Home</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#">Services</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#">About</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
