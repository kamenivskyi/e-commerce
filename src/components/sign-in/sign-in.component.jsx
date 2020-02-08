import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomeButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2 className='title'>I have alreade an account</h2>
        <span className='subtitle'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomeButton type='submit'>Sign in</CustomeButton>
          <CustomeButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomeButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
