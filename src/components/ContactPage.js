import React, { Component } from 'react';
import NavBarPage from './NavBarPage';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavBarPage/>
        <h1>Need more help?</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mDC_2zTrpbg" frameborder="0" allow=
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Office: (318) 867-5309</p>
        <p>Don't leave a message because I never check them!</p>
      </div>
    );
  }
}
export default ContactPage;