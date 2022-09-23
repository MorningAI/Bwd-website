import React from 'react';
import Link from 'next/link';

const RelatedPost = () => {
    return (
        <>
            <div className="related-post">
                <h3 className="title">Related Post</h3>
                
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a className="d-block">
                                        <img src="/images/blog/blog2.jpg" alt="blog" />
                                    </a>
                                </Link>
                                <Link href="/blog-grid">
                                    <a className="tag">Branding</a>
                                </Link>
                            </div>
                            <div className="content">
                                <ul className="meta">
                                    <li>
                                        <i className="ri-time-line"></i> April 14, 2021</li>
                                    <li>
                                        <i className="ri-message-2-line"></i> 
                                        <Link href="/blog-details">
                                            <a>(0) Comment</a>
                                        </Link>
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Branding involves developing strategy to create a point of differentiation</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a className="d-block">
                                        <img src="/images/blog/blog3.jpg" alt="blog" />
                                    </a>
                                </Link>

                                <Link href="/blog-grid">
                                    <a className="tag">Agency</a>
                                </Link>
                            </div>
                            <div className="content">
                                <ul className="meta">
                                    <li>
                                        <i className="ri-time-line"></i> April 13, 2021
                                    </li>
                                    <li>
                                        <i className="ri-message-2-line"></i> 
                                        <Link href="/blog-details">
                                            <a>(4) Comment</a>
                                        </Link>
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Design is a plan or specification for the construction of an object</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedPost;