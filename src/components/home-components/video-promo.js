import React, { Component } from 'react';
import homedata from '../../data/home.json';

class VideoPromo extends Component {
    render() {
        let videoPromoContent = homedata.videoPromo
        let publicUrl = process.env.PUBLIC_URL

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+videoPromoContent.background+')'
        }

        return     <section id="video-promo" className="pt100 pb100 bg-parallax" style={inlineStyle}>
        <div className="color-overlay opacity-8"></div>
        <div className="container">
            <div className="row">
                <div className="video-promo-content aboutIntroText color-white col-lg-8 offset-lg-2 text-center">
                    <h2 className="m-30px-b">{videoPromoContent.title}</h2>
                    <p className="m-50px-b md-m-30px-b">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting.</p>
                    <button className="js-modal-btn video-popup" data-video-id={videoPromoContent.videoID}><i className={videoPromoContent.icon}></i></button>
                </div>
            </div>
        </div>
    </section>
    }
}


export default VideoPromo
