import React, { Component } from 'react';
import homedata from '../../data/home.json';

class ScreenshotsV2 extends Component {

    render() {

        let getAccordion = homedata.accordion
        let getSectionHeading = getAccordion.sectionHeading
        let getAccordionContent = getAccordion.accordionContent
        let publicUrl = process.env.PUBLIC_URL

        return     <section id="screenshots" className="pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML = {{__html: getSectionHeading.title}}></h2>
                        <hr className="lines"/>
                        <p>{getSectionHeading.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">

				        <div className="col-lg-7 md-m-30px-b">
                    <div id="accordion">
                        {
                          getAccordionContent.map( ( element, i ) => {
                            let active = 'false',
                                show = '';

                            if( i === 0 ) {
                              active = 'true';
                              show = ' show';
                            }
                            return(
                              <div key={i} className="card">
                                <div className="card-header primary-bg" id={`headingOne${i}`}>
                                  <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#collapseOne${i}`} aria-expanded={active} aria-controls="collapseOne">
                                      {element.title}
                                    </button>
                                  </h5>
                                </div>
                            
                                <div id={`collapseOne${i}`} className={`collapse${show}`} aria-labelledby={`headingOne${i}`} data-parent="#accordion">
                                  <div className="card-body">
                                  {element.content}
                                  </div>
                                </div>
                              </div>
                            )
                          } )
                        }
                        
                      </div>
				          </div>
                  <div className="col-lg-5 text-center">
                    <img src={publicUrl+getAccordion.image} alt={`faq`} />
                  </div>

            </div>
        </div>
    </section>
    }
}

export default ScreenshotsV2
