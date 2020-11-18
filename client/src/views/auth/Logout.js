import React from 'react';

const Logout = () => {
  const handleLogout = e => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/v1/users/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ${}'
      }
    });
  };

  return (
    <div>
      <h1>Are you sure you want to logout?</h1>
      <input type='button' value='Logout' onClick={handleLogout} />
    </div>
  );
};

export default Logout;
