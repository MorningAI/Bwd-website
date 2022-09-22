import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/global-components/navbar';
import Home from './components/home';
import Footer from './components/global-components/footer';



class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
                </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('sandyapp'));
