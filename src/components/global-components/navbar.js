import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

class Navbar extends Component {

    constructor( props ) {
        super(props);
        this.state = {addClass: 'Say hello' }
    }

    componentDidMount() {
       window.addEventListener('scroll', this.handleScroll.bind(this));
        
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll () {
        let lastScrollY = window.scrollY

       if( lastScrollY >= 60 ) {

         this.setState((state, props) => ({ 
            addClass: 'nav-sticky' 
        }) );

       } else {

        this.setState((state, props) => ({
            addClass: ''
        }));

       }
        
    }
    render() {

        let logoAlt = "Sandy";
        
        return (
            <div>
            <nav className={`${this.state.addClass} navbar navbar-inverse navbar-expand-lg header-nav fixed-top header`}>
                <div className="container">
                    <a className="navbar-brand logo" href={`${process.env.PUBLIC_URL}/`}>
                        <img className="logo-dark" src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt={logoAlt}/>
                        <img className="logo-light" src={process.env.PUBLIC_URL + '/assets/img/logo-light.png'} alt={logoAlt}/>
                    </a>
                    <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                        <i className="icofont-navigation-menu"></i>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarCodeply">
                        <ul className="nav navbar-nav ml-auto">
                            <li>
                                <HLink className="nav-link" smooth to={`/#home`}>Home</HLink>
                                <span className="sub-menu-toggle" role="navigation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="icofont-rounded-down"></i>
                                </span>
                                <ul className="sub-menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/home-version-full">Home Version Full</Link></li>
                                    <li><Link to="/home-version-half">Home Version Half</Link></li>
                                </ul>
                            </li>
                            <li><HLink className="nav-link" smooth to={`/#features`}>Features</HLink></li>
                            <li><HLink className="nav-link" smooth to={`/#about`}>About</HLink></li>
                            <li><HLink className="nav-link" smooth to={`/#screenshots`}>Screenshots</HLink></li>
                            <li><HLink className="nav-link" smooth to={`/#pricing`}>Pricing</HLink></li>
                            <li>
                                <HLink className="nav-link" smooth to={`/#blog`}>Blog</HLink>
                                <span className="sub-menu-toggle" role="navigation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="icofont-rounded-down"></i>
                                </span>
                                <ul className="sub-menu">
                                    <li><Link to="/blog-full">Blog full width</Link></li>
                                    <li><Link to="/blog-col-2">Blog 2 column</Link></li>
                                    <li><Link to="/blog-col-3">Blog 3 column</Link></li>
                                    <li><Link to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                    <li><Link to="/blog-right-sidebar">Blog right sidebar</Link></li>
                                    <li><Link to="/blog-single">Single blog</Link></li>
                                    <li><Link to="/blog-single-left-sidebar">Single left sidebar</Link></li>
                                    <li><Link to="/blog-single-right-sidebar">Single right sidebar</Link></li>
                                    <li><Link to="/fof">404</Link></li>
                                    <li><Link to="/comingsoon">Coming Soon</Link></li>
                                </ul>
                            </li>
                            <li><HLink className="nav-link" smooth to={`/#contact`}>Contact</HLink></li>
                            <li><HLink className="nav-link" smooth to={`/#subscription`}>Subscribe</HLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}


export default Navbar