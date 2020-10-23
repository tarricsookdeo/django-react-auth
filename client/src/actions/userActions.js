// import { LOGIN_USER, REGISTER_USER } from './types';

// Login user
export const loginUser = (email, password) => {
  const data = {
    email: email,
    password: password
  };

  fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};
