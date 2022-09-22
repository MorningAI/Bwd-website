import React, { Component } from 'react';

class Comments extends Component {
    render () {

        let replayLink = '#';
        let publicUrl = process.env.PUBLIC_URL

        return (
            <div className="blog-comment">
                <div className="col-md-12">
                    <h4>10 Comments</h4>
                    <ul className="comment-list">
                        <li className="comment">
                            <div className="the-comment">
                                <div className="avatar">
                                    <img src={`${publicUrl}/assets/img/blog/avater-1.jpg`} alt={`avater`} />
                                </div>
                                <div className="comment-box">
                                    <div className="comment-author meta">
                                        <strong>User</strong> August 2, 2016 at 1:38 pm<a rel="nofollow" className="comment-reply-link" href={replayLink}> - Reply</a>
                                    </div>
                                    <div className="comment-text">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <ul className="children">
                                <li className="comment">
                                    <div className="the-comment">
                                        <div className="avatar">
                                            <img src={`${publicUrl}/assets/img/blog/ta-avater.jpg`} alt={`avater`} />
                                        </div>
                                        <div className="comment-box">
                                            <div className="comment-author meta">
                                                <strong>ThemeAtelier</strong> August 2, 2016 at 1:39 pm<a rel="nofollow" className="comment-reply-link" href={replayLink}> - Reply</a>
                                            </div>
                                            <div className="comment-text">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <form id="comment-form" action={`#`}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <textarea name="comment" className="form-control textarea-box" placeholder="Comment" required></textarea>
                            </div>
                            <div className="col-md-4">
                                <input name="name" className="form-control input-box" type="text" placeholder="Name" required />
                            </div>
                            <div className="col-md-4">
                            <input name="email" className="form-control input-box" type="email" placeholder="Email" required />
                            </div>
                            <div className="col-md-4">
                            <input name="website" className="form-control input-box" type="text" placeholder="Website" required />
                            </div>
                            <div className="col-md-12">
                                <button className="primary-btn">Post comment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        
        )
    }
}


export default Comments
