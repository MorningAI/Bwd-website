// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import React from "react";
import Link from '@/utils/ActiveLink';

const NavbarStyleTwo = () => {
    const [menu, setMenu] = React.useState("home")
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }
    
    //    const toggleNavbar = (event) => {setMenu(event)}

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });  
        window.scrollTo(0, 0); 
    }) 
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="texap-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light bg-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/bwd-logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav  " >
                                    <li className="nav-item">
                                        <Link href="/" activeClassName={menu == 'home' && 'active'}>
                                            <a onClick={()=> toggleNavbar('home')} className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                        
                                        
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#about-us" activeClassName={menu == 'about-us' && 'active'}>
                                            <a onClick={()=>toggleNavbar('about-us')}  className="nav-link">
                                                About Us
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#screenshots-area" activeClassName={menu == 'screenshots-area' && 'active'}>
                                            <a onClick={()=>toggleNavbar('screenshots-area')}  className="nav-link">
                                            Screenshots
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#key-features" activeClassName={menu == 'features' && 'active'}>
                                            <a onClick={()=>toggleNavbar('features')} className=" nav-link">
                                                Features
                                            </a>
                                        </Link>
                                        

                                        
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#app-progress" activeClassName={menu == 'app-progress' && 'active'}>
                                            <a onClick={()=>toggleNavbar('app-progress')} className="nav-link">Progress</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#contact-us" activeClassName={menu == 'contact-us' && 'active'}>
                                            <a onClick={()=>toggleNavbar('contact-us')} className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options">
                                <Link href="#app-download" activeClassName={menu == 'app-download' && 'active'}>
                                    <a className="default-btn">
                                        Get the App
                                    </a>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarStyleTwo;