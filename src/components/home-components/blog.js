import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import homedata from '../../data/home.json';

class Blog extends Component {
    render () {

        let blogInfo = homedata.blogs
        let sectionHeadingInfo = blogInfo.sectionHeading
        let blogContent = blogInfo.blogcontent
        let publicUrl = process.env.PUBLIC_URL

        // owl Options
        const options = {
            dots: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i'],
            autoplay: false,
            autoplayTimeout: 5000,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                990: {
                    items: 2,
                },
                1100: {
                    items: 3,
                },
            },
        };
        return     <section id="blog" className="pt100 pb100 bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML={{__html: sectionHeadingInfo.title}}></h2>
                        <hr className="lines" />
                        <p>{sectionHeadingInfo.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <OwlCarousel className="latest-blog owl-carousel owl-theme" options={options} >

                        {
                            blogContent.map( ( post, i ) => {

                            // Inline Style
                            let inlineStyle = {
                                "backgroundImage": "url("+publicUrl+post.image +")"
                            }
                            // category
                            let categories = post.cats.map( ( cat, k ) => {
                                return (
                                    <a key={k} href={cat.catlink}>{cat.catname}</a>
                                )
                            } )
                            return (
                                <div key={i} className="blog-post">
                                    <aside className="blog-thumb" style={inlineStyle}>
                                        <div className="thumb-overlay">
                                            <div className="blog-meta">
                                                Posted: {post.postDate}
                                                <br/> Posted In: <div className="blog-category" >{categories}</div>
                                                <br/> Posted By: <a href={post.authorUrl}>{post.author}</a>
                                                <br/>
                                                <a href={post.commentUrl}>{post.comments}</a>
                                            </div>
                                        </div>
                                    </aside>
                                    <div className="post-content">
                                        <h2 className="post-title"><a href={post.url}>{post.title}</a></h2>
                                        <p>{post.desc}</p>
                                        <a className="read-more primary-btn primary-btn-2" href={post.url}>{post.readLink}</a>
                                    </div>
                                </div>
                            )
                            } )
                        }
                    </OwlCarousel>
                 
					<div className="text-center mt30">
						<a href={blogInfo.viewAllUrl} className="primary-btn">All posts</a>
					</div>
                </div>
            </div>
        </div>
    </section>
    }
}


export default Blog
