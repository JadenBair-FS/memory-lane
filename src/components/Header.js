
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-white text-xl font-bold">Home</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
