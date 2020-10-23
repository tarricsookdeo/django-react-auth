import { LOGIN_USER } from './types';

// Login user
export const loginUser = (email, password) => async dispatch => {
  const data = {
    email: email,
    password: password
  };

  const request = await fetch(
    'http://127.0.0.1:8000/api/v1/users/auth/login/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );

  const response = await request.json();

  dispatch({
    type: LOGIN_USER,
    payload: response.key
  });
};
