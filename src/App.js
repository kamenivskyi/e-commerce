import React from 'react';

import { Routes } from './routes';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user });
        // User is signed in.
        console.log(this.state.currentUser);
      } else {
        // No user is signed in.
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className='App'>
        <Header currentUser={currentUser} />
        <Routes />
      </div>
    );
  }
}

export default App;
