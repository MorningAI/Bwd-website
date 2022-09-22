import React, { Component } from 'react';
import Comments from './comments'
import BlogSingleHeader from '../global-components/blog-single-header'
import singleBlogdata from '../../data/single-blogdata'

class SingleBlog extends Component {
    render () {

        let getdata = singleBlogdata.singlepostdata;
        let publicUrl = process.env.PUBLIC_URL
        let exampleLink = '#'
        return (
            <div>
                <BlogSingleHeader data={singleBlogdata} />
            <div id="blog" className="pt100 pb100">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="blog-post">	
                            <aside className="post-thumb">
                                <img src={publicUrl+getdata.image} alt={getdata.title} />
                            </aside>
                            <div className="post-content post-content-full">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</blockquote>
                                <h1>This is heading one</h1>
                                <h2>This is heading two</h2>
                                <h3>This is heading three</h3>
                                <h4>This is heading four</h4>
                                <h5>This is heading five</h5>
                                <h6>This is heading six</h6>
                                <h3>Key Features</h3>
                                <ul>
                                    <li>Responsive design</li>
                                    <li>Unique Design</li>
                                    <li>Bootstrap framework</li>
                                    <li>CSS3 Animations</li>
                                    <li>Pixel perfect design</li>
                                    <li>Working Contact Form</li>
                                </ul>
                                <h3>About Sandy</h3>
                                <ul>
                                    <li><a href={exampleLink}>Blog page included</a></li>
                                    <li><a href={exampleLink}>W3C Valid HTML</a></li>
                                    <li><a href={exampleLink}>Very Easy to Customize</a></li>
                                    <li><a href={exampleLink}>Google fonts used</a></li>
                                    <li><a href={exampleLink}>SEO friendly</a></li>
                                    <li><a href={exampleLink}>Well documented</a></li>
                                </ul>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <footer className="blog-footer text-center">
                                <span className="cat-links">
                                <i className="fa fa-folder"></i> Posted in: <a href={exampleLink}>Apps</a>, <a href={exampleLink}>Design</a>, <a href={exampleLink}>Creative</a>
                                </span>
                                <span className="tags-links">
                                    <i className="fa fa-tags"></i> Tagged: <a href={exampleLink}>app</a>, <a href={exampleLink}>google</a>, <a href={exampleLink}>test</a>
                                </span>
                            </footer>
                        </div>
                        <div className="clearfix"></div>
                        <div className="row nav-links">
                            <div className="col-md-6">
                                <div className="nav-previous text-left">
                                    <a href={exampleLink}>
                                        <span><i className="fa fa-angle-left"></i> Previous </span>
                                        <h5>Modern Apps With Amazing Features</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="nav-next text-right">
                                    <a href={exampleLink}>
                                        <span>Next <i className="fa fa-angle-right"></i></span>
                                        <h5>Modern Apps With Amazing Features</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/** Comments Area **/}
                        <Comments />

                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}


export default SingleBlog
