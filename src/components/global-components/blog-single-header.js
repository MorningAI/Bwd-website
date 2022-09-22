import React, { Component } from 'react';

class BlogSingleHeader extends Component {
    render() {

       let getData = this.props.data.singlepostdata
       let publicUrl = process.env.PUBLIC_URL
            
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+getData.image+')'
        }
        let exapleLink = '#'
        return (
            <section id="special-features" className="pt200 pb100 bg-parallax" style={inlineStyle}>
                <div className="color-overlay opacity-8"></div>
                <div className="container">
                    <div className="row">
                        <div className="hero-content color-white col-sm-8 offset-sm-2 text-center">
                            <h2>{getData.title}</h2>
                            <div className="post-meta">
                                <ul>
                                    <li><i className="fa fa-clock-o"></i> <a href={exapleLink}>{getData.date}</a></li>
                                    <li><i className="fa fa-user"></i> <a href={exapleLink}>{getData.author}</a></li>
                                    <li><i className="fa fa-comment"></i> <a href={exapleLink}>{getData.comments}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default BlogSingleHeader
