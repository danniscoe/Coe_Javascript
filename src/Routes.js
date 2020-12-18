import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //as is an alias - using the browser router with an alias of route
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';


class Routes extends Component {
    render(){
        return (
            <div>
                <Router>
                    <hr />
                <Route name="Home" exact path="/" component={HomePage} />
                <Route name="About" exact path="/about" component={AboutPage} />
                <Route name="Menu" exact path="/menu" component={MenuPage} />
                <Route name="Contact" exact path="/contact" component={ContactPage} />
                </Router>
            </div>
        )
    }
}
export default Routes;