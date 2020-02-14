import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomeButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

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

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  getDataFromGoogle = () => {
    signInWithGoogle().then(res => console.log(res));
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
          <div className='buttons'>
            <CustomeButton type='submit'>Sign in</CustomeButton>
            <CustomeButton onClick={signInWithGoogle} isGoogleSignin>
              Sign in with Google
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
