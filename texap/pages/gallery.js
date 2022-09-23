import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import Lightbox from 'react-image-lightbox'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
 
const images = [
    ('/images/gallery/gallery1.jpg'),
    ('/images/gallery/gallery2.jpg'),
    ('/images/gallery/gallery3.jpg'),
    ('/images/gallery/gallery4.jpg'),
    ('/images/gallery/gallery5.jpg'),
    ('/images/gallery/gallery6.jpg'),
    ('/images/gallery/gallery7.jpg'),
    ('/images/gallery/gallery8.jpg'),
    ('/images/gallery/gallery9.jpg'),
];

const Gallery = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Gallery"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Gallery"
            />

            <div className="gallery-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Lightbox */}
                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => setIsOpenImage(false)}
                                onMovePrevRequest={() =>
                                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex((photoIndex + 1) % images.length)
                                }
                            />
                        )}

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                >
                                    <img src="/images/gallery/gallery1.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                >
                                    <img src="/images/gallery/gallery2.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                >
                                    <img src="/images/gallery/gallery3.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                >
                                    <img src="/images/gallery/gallery4.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                >
                                    <img src="/images/gallery/gallery5.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                >
                                    <img src="/images/gallery/gallery6.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                >
                                    <img src="/images/gallery/gallery7.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                >
                                    <img src="/images/gallery/gallery8.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-image" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                >
                                    <img src="/images/gallery/gallery9.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <AppDownloadStyle2 />
 
            <FooterStyleOne />
        </>
    )
}

export default Gallery;