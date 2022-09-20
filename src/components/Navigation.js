import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <a href="#">
                        Home <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/">Home 1</Link>
                        </li>
                        <li>
                            <Link to="/home-two">Home 2</Link>
                        </li>
                        <li>
                            <Link to="/home-three">Home 3</Link>
                        </li>
                        <li>
                            <Link to="/home-four">Home 4</Link>
                        </li>
                        <li>
                            <Link to="/home-five">Home 5</Link>
                        </li>
                        <li>
                            <Link to="/home-six">Home 6</Link>
                        </li>
                        <li>
                            <Link to="/home-seven">Home 7</Link>
                        </li>
                        <li>
                            <Link to="/home-eight">Home 8</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <a href="#">
                        Pages <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/about-us">About</Link>
                        </li>
                        <li>
                            <Link to="/error">Error</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        News <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/news">News Page</Link>
                        </li>
                        <li>
                            <Link to="/news/single-news">Single News</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
