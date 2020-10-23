import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/userActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    loginUser(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label for='email'>Email Address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            placeholder='Enter a valid and registered email address'
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
        <Link to='/signup' className='btn btn-link'>
          Signup instead
        </Link>
      </form>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
