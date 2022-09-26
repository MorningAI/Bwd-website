// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const FooterStyleTwo = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area footer-style-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo">
                                        <img src="/images/bwd-logo.png" alt="logo" />
                                    </a>
                                </Link>

                                <p>Business with diaspora, unlimited possibilities </p>

                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/" target="_blank">
                                            <i className="ri-github-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-2">
                                <h3>Company</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/about-modern">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/feedback">
                                            <a>Reviews</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Terms of use</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Return Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Newsletter</h3>
                                <p>Best solution for your it startup business, consecteturadipiscing elit.</p>

                                <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                                    <input 
                                        type="text" 
                                        className="input-newsletter" 
                                        placeholder="Your Email" 
                                        name="EMAIL" 
                                        required 
                                    />
                                    <button type="submit">
                                        <i className="ri-send-plane-2-line"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="copyright-area">
                        <p>Copyright &copy; {currentYear} <strong>Business With Diaspora</strong>. All Rights Reserved by <a href="https://morningai.net/" target="_blank">Morning AI</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterStyleTwo;