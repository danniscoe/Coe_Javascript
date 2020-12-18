import React, { Component } from 'react';
import NavBarPage from './NavBarPage';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavBarPage/>
        <h1>Welcome!</h1>
        <p><h3>Danni's React Router Lab</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JPT3bFIwJYA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>These challenges are a lot of work, but I enjoy them.</h3></p>
      </div>
    );
  }
}
export default AboutPage;