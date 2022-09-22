import React, { Component } from 'react';
import homedata from '../../data/home.json';

class HowWorks extends Component {
    render() {

        let howWorksContent = homedata.howWorks
        let sectionHeadingInfo = howWorksContent.sectionHeading
        let workContent = howWorksContent.workProcess

        return 	<section id="how_works" className="pt100 pb100 bg-light-gray">
		<div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML= {{__html:sectionHeadingInfo.title }}></h2>
                        <hr className="lines"/>
                        <p>{sectionHeadingInfo.desc}</p>
                    </div>
                </div>
            </div>	
			<div className="row">
                {
                    workContent.map( ( element, i ) => {
                        return(
                        <div key={i} className="how-works-item text-center col-md-3">
                            <div className="icon-outer">
                                <i className={element.icon}></i>
                            </div>
                            <h4 className="title m-t-30">{element.title}</h4>
                        </div>
                        )
                    } )
                }
            </div>
		</div>
	</section>
    }
}


export default HowWorks
