import React, { Component } from 'react';
import PageHeader from '../global-components/page-header'
import Pagination from '../global-components/pagination'

class BlogFull extends Component {
    render () {

        let getProps = this.props.data
        let getBlogData = getProps.blogs
        let publicUrl = process.env.PUBLIC_URL
        
        return (
            <div>
            <PageHeader />
            <div id="blog" className="pt100 pb100">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        {
                            getBlogData.map( function( data, i ) {
                                return (
                                <div key={i} >
                                        <div className="blog-post">
                                        <aside className="post-thumb">
                                            <a href={data.permalink}><img src={publicUrl+data.image} alt={data.title} /></a>
                                        </aside>
                                        <div className="post-content post-content-full">
                                            <h2 className="post-title"><a href={data.permalink}>{data.title}</a></h2>
                                            <p className="m-30px-b">{data.content}</p>
                                            <a className="read-more primary-btn primary-btn-2" href={data.permalink}>Read more...</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/** Pagination **/}
                <Pagination />

            </div>
        </div>
        </div>
        
        )
    }
}


export default BlogFull
