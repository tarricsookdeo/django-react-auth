import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // check for auth token in local storage
    // if there is a token, setIsAuth to true
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  if (isAuth) {
    return (
      <nav>
        <h1>Django React Auth</h1>
        <ul>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <h1>Django React Auth</h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
