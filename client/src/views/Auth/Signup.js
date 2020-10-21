import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='container'>
      <h1>Signup</h1>
      <form>
        <div className='form-group'>
          <label for='email'>Email Address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            placeholder='Enter a valid email address'
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
          />
        </div>
        <div className='form-group'>
          <label for='exampleInputPassword1'>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Confirm Password'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Signup
        </button>
        <Link to='/login' className='btn btn-link'>
          Login instead
        </Link>
      </form>
    </div>
  );
};

export default Signup;
