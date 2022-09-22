import React, { Component } from 'react';
import Widgetdata from '../../data/widgetdata'

class Sidebar extends Component {
    
    render () {

        let getWidgetData = Widgetdata
        let getSearchWidget = getWidgetData.searchWidget
        let getLatestPost = getWidgetData.latestPost
        let getCategories = getWidgetData.categories
        let getTags = getWidgetData.tags


        return <div id="sidebar" className="col-lg-4 order-1 order-lg-0">
        <div className="sidebar-inner">
            <aside className="widget-area">
                <div id="search-2" className="widget widget_search">
                    <h3>{getSearchWidget.title}</h3>
                    <form id="searchform" action="#">
                        <input type="text" className="form-control input-box " placeholder="Search" />
                        <input type="hidden" value="post" />
                    </form>
                </div>
                <div className="widget">
                    <h3>{getLatestPost.widgetTitle}</h3>
                    <div className="latest-post-widget">
                        {
                            getLatestPost.widgetPosts.map( ( posts, i  ) => {
                                return (
                                    <div key={i}>
                                        <span>{posts.date}</span>
                                        <h5><a href={posts.url}>{posts.title}</a></h5>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
                <div className="widget">
                    <h3>{getCategories.widgetTitle}</h3>
                    <ul>
                    {
                        getCategories.widgetPosts.map( ( posts, i  ) => {
                            return (
                                <li key={i}><a href={posts.url}>{posts.title}</a></li>
                            )
                        } )
                    }
                    </ul>
                </div>
                <div className="widget">
                    <h3>{getTags.widgetTitle}</h3>
                    <div className="tagcloud">
                    {
                        getTags.widgetPosts.map( ( posts, i  ) => {
                            return (
                                <a key={i} href={posts.url}>{posts.title}</a>
                            )
                        } )
                    }
                    </div>
                </div>
            </aside>
        </div>
    </div>
    }
}


export default Sidebar
