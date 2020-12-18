import React, {Component} from 'react';
import NavBarPage from './NavBarPage';

class MenuPage extends Component {
    render(){
      return(
        <div>
        <NavBarPage/>
          <h1>“Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones.” – Keith Richards</h1>
          <img src="https://www.emergingedtech.com/wp/wp-content/uploads/2017/04/Music.jpg" />
          <p><center><h3>My Favorite Bands</h3>
            <ul>
            <li>Blue October</li>
            <li>The Killers</li>
            <li>Metallica</li>
            </ul></center>
          </p>
        </div>
      );
    }
  }
  export default MenuPage;