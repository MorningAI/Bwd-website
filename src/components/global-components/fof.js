import React, { Component } from 'react';

class Fof extends Component {
    render() {

        let getFofData = this.props.data
        let publicUrl = process.env.PUBLIC_URL
     
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+getFofData.bgimg+')'
        }
        
        return (
            <section className="pt100 pb100 hero-full-screen extra-page-wrapper bg-parallax color-white" style={inlineStyle}>
            <div className="color-overlay opacity-8"></div>
            <div className="cloud x1"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>
            <div className="cloud x6"></div>
            <div className="cloud x7"></div>
            <div className="cloud x8"></div>
            <div className="cloud x9"></div>
            <div className="cloud x10"></div>
            <div className="container">
                <div className="row full-height align-items-center">
                    <div className="hero-content col-sm-10 offset-sm-1 text-center p-175px-t p-100px-b md-p-150px-t md-p-70px-b">
                        <div className="extra-page-content text-center">
                            <div className="ep-title">{getFofData.title}</div>
                            <div className="ep-subtitle">{getFofData.shortDesc}</div>
                            <div className="col-md-6 offset-md-3">
                                <div className="widget widget_search">
                                    <form id="searchform" action="#" className="d-flex justify-content-center">
                                        <input type="text" className="form-control input-box " placeholder="Search"/>
                                        <input type="hidden" value="post"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}



export default Fof
