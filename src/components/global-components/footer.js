import React, { Component } from 'react';
import FooterData from '../../data/footerdata'; 

class Footer extends Component {
    render() {
        return <footer id="footer-section" className="pt50 pb50 bg-black">
        <div className="container">
            <div className="row text-center">
                <div className="col social-icons">
                    <ul>
                        {
                           FooterData.socialicon.map( function( data, i ) {
                               return(
                                <li key={i} className={data.class+` wow zoomIn`} data-wow-duration="1s"><a href={data.url}><i className={data.icon}></i></a>
                                </li>
                               )
                           } )
                        }
                    </ul>
                </div>
                <div className="col-sm-12 color-white" dangerouslySetInnerHTML={{__html: FooterData.copyrighttext}}></div>
            </div>
        </div>
    </footer>
    }
}



export default Footer
