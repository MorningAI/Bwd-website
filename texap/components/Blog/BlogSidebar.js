import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <>
            <div className="widget-area">
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className="ri-search-2-line"></i>
                        </button>
                    </form>
                </div>

                <div className="widget widget_pakap_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Being The Best-Selling Smart Phone This Year</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 15, 2020
                            </span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Love Songs Helped Me Through Heartbreak</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 14, 2020
                            </span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Two Fashion Designers Busy With 2020 Winter Fashion</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 13, 2020
                            </span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg4" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Working in the Office is a Tradition For Women</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 12, 2020
                            </span>
                        </div>
                    </article>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>
                    
                    <ul>
                        <li>
                            <Link href="/blog-right-sidebar">
                                <a>Business <span className="post-count">(2)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-right-sidebar">
                                <a>Privacy <span className="post-count">(5)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-right-sidebar">
                                <a>Technology <span className="post-count">(6)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-right-sidebar">
                                <a>Tips <span className="post-count">(2)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-right-sidebar">
                                <a>Log in <span className="post-count">(1)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-right-sidebar">
                                <a>Uncategorized <span className="post-count">(1)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
  
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="/blog-right-sidebar">
                            <a>Advertisment</a>
                        </Link>

                        <Link href="/blog-right-sidebar">
                            <a>Business</a>
                        </Link>

                        <Link href="/blog-right-sidebar">
                            <a>Life</a>
                        </Link>

                        <Link href="/blog-right-sidebar">
                            <a>Lifestyle</a>
                        </Link>

                        <Link href="/blog-right-sidebar">
                            <a>Fashion</a>
                        </Link>

                        <Link href="/blog-right-sidebar">
                            <a>Ads</a>
                        </Link>

                        <Link href="/blog-right-sidebar">
                            <a>Inspiration</a>
                        </Link>

                        <Link href="/blog-right-sidebar">
                            <a>Blog</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSidebar;