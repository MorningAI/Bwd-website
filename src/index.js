import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/global-components/navbar';
import Home from './components/home';
import HeroFull from './components/home-full';
import HeroHalf from './components/home-half';
import BlogFull from './components/blog-components/blog-full';
import BlogColTwo from './components/blog-components/blog-2-col';
import BlogColThree from './components/blog-components/blog-3-col';
import BlogLeftSidebar from './components/blog-components/blog-left-sidebar';
import BlogRightSidebar from './components/blog-components/blog-right-sidebar';
import SingleBlog from './components/blog-components/single';
import SingleLeftSidebar from './components/blog-components/single-left-sidebar';
import SingleRightSidebar from './components/blog-components/single-right-sidebar';
import Fof from './components/global-components/fof';
import ComingSoon from './components/global-components/coming-soon';
import Footer from './components/global-components/footer';
import Blogdata from './data/blog';
import FofData from './data/fof';
import comingSoonData from './data/coming-soon';


class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home-version-full" component={HeroFull} />
                    <Route exact path="/home-version-half" component={HeroHalf} />
                    <Route path="/blog-full" render = { () => { return <BlogFull data={Blogdata} /> } } />
                    <Route path="/blog-col-2" render = { () => { return <BlogColTwo data={Blogdata} /> } } />
                    <Route path="/blog-col-3" render ={ () => { return <BlogColThree data={Blogdata} /> } } />
                    <Route path="/blog-left-sidebar" render = { () => { return <BlogLeftSidebar data={Blogdata} /> } } />
                    <Route path="/blog-right-sidebar" render = { () => { return <BlogRightSidebar data={Blogdata} /> } } />
                    <Route path="/blog-single" render = { () => { return <SingleBlog /> } } />
                    <Route path="/blog-single-left-sidebar" render = { () => { return <SingleLeftSidebar /> } } />
                    <Route path="/blog-single-right-sidebar" render = { () => { return <SingleRightSidebar /> } } />
                    <Route path="/fof" render = { () => { return <Fof data={FofData} /> } } />
                    <Route path="/comingsoon" render = { () => { return <ComingSoon data={comingSoonData} /> } } />
                    <Route render = { () => { return <Fof data={FofData} /> } } />
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
