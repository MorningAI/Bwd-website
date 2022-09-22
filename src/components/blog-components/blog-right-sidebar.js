import React, { Component } from 'react';
import Sidebar from './sidebar';
import Pagination from '../global-components/pagination'
import PageHeader from '../global-components/page-header'

class BlogRightSidebar extends Component {
    render () {

        let getProps = this.props.data
        let getBlogData = getProps.blogs
        let publicUrl = process.env.PUBLIC_URL

        return (
        <div>
        <PageHeader />
        <section id="blog" className="pt100 pb100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            getBlogData.map( ( data, i ) => {

                                // category
                                let categories = data.category.map( ( cats, k ) => {
                                        return (
                                            <a key={k} href={cats.catlink}>{cats.catname}</a>
                                        )
                                } )

                                // Tags
                                let tags = data.tags.map( ( tags, t ) => {
                                    return (
                                        <a key={t} href={tags.taglink}>{tags.tagname}</a>
                                    )
                                } )

                                return (
                                    <div key={i} className="blog-post">	
                                        <figure className="post-thumb">
                                            <a href={data.permalink}><img src={publicUrl+data.image} alt={data.title} /></a>
                                        </figure>
                                        <div className="post-content post-content-full">
                                            <h2 className="post-title"><a href={data.permalink}>{data.title}</a></h2>
                                            <p className="m-30px-b">{data.content}</p>
                                            <a className="read-more primary-btn primary-btn-2" href={data.permalink}>Read more...</a>
                                        </div>
                                        <footer className="blog-footer text-center">
                                            <span className="cat-links">
                                            <i className="fa fa-folder"></i> Posted in: <div className="blog-category">{categories}</div>
                                            </span>
                                            <span className="tags-links">
                                                <i className="fa fa-tags"></i> Tagged: <div className="blog-tags">{tags}</div>
                                            </span>
                                        </footer>
                                    </div>
                                )
                            })
                        }

                        {/** Pagination **/}
                        <Pagination />
                    </div>
                    {/*** Sidebar ***/}
                    <Sidebar />
                </div>
            </div>
        </section>
        </div>
        )

    }
}


export default BlogRightSidebar
