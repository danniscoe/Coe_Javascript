import React, { Component } from 'react';
import NavBarPage from './NavBarPage';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarPage/>
        <h1>Danni Coe's HomePage</h1>
        <h4>One of the things I learned the hard way was that it doesn’t pay to get discouraged. Keeping busy and making optimism a way of life can restore your faith in yourself. - Lucille Ball</h4>
        <img src="https://media.tenor.com/images/d545c798b6c8a2a0417df747108f3b4c/tenor.gif" />
      </div>
    );
  }
}
export default HomePage;