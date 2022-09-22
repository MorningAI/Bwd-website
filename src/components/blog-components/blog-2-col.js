import React, { Component } from 'react';
import Pagination from '../global-components/pagination'
import PageHeader from '../global-components/page-header'

class BlogColTwo extends Component {
    render () {

		let getProps = this.props.data
		let getBlogData = getProps.blogs
		let publicUrl = process.env.PUBLIC_URL

        return (
		<div>
		<PageHeader />
		<div id="blog" className="pt100 pb100">
        <div className="container">
			<div className="row grid">
				{
					getBlogData.map( ( data, i ) => {
						// Inline Style
						let inlineStyle = {
							"backgroundImage": "url("+ publicUrl+data.image +")"
						}
						// category
						let categories = data.category.map( ( cats, k ) => {
								return (
									<a key={k} href={cats.catlink}>{cats.catname}</a>
								)
						} )

						return (

							<div key={i}  className="col-sm-6 grid-item">
								<div className="blog-post">
									<aside className="blog-thumb" style={inlineStyle}>
										<div className="thumb-overlay">
											<div className="blog-meta">
												Posted: {data.date}
												<br/> Posted In: <div className="blog-category">{categories} </div>
												<br/> Posted By: <a href={data.authorLink}>{data.author}</a>
												<br/>
												<a href={data.authorLink}>{data.comments}</a>
											</div>
										</div>
									</aside>
									<div className="post-content">
										<h2 className="post-title"><a href={data.permalink}>{data.title}</a></h2>
										<p className="m-30px-b">{data.content}</p>
										<a className="read-more primary-btn primary-btn-2" href={data.permalink}>Read more...</a>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>

			{/** Pagination **/}
			<Pagination />

        </div>
	</div>
	</div>
	)  
    }
}


export default BlogColTwo
