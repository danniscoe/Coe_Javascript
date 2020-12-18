import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class NavBarPage extends Component{
    render(){
        return(
            <div className="nav">
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/menu">Menu</Link> |
                <Link to="/contact">Contact</Link>
            </div>
        )
    }
}

export default NavBarPage;
