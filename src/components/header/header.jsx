import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState  } from 'react-firebase-hooks/auth'; 

const Header = () => {
  const [user, loading] = useAuthState ();

  return (
    <header className="flex justify-between items-center bg-gray-800 py-4 px-6">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Todo</Link>
          </li>
          <li>
            <Link to="/weather" className="text-white hover:text-gray-300">Weather</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        {loading && <span className="text-white">Loading...</span>}
        {!loading && user ? (
          <div className="flex items-center space-x-2 text-white">
            <span>Hello, {user.displayName}</span>
            {/* <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Logout</button> */}
          </div>
        ) : (
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
