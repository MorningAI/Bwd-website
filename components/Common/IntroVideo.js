import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const IntroVideo = () => {

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="video-area">
                <div className="container">
                    <div className="video-box">
                        <img src="/images/video/video-img2.jpg" alt="video-image" />
 
                        <div
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="video-btn popup-youtube"
                        > 
                            <i className="ri-play-line"></i>
                        </div>

                        <div className="shape">
                            <img className="shape1" src="/images/shape/shape1.png" alt="shape1" />
                            <img className="shape2" src="/images/shape/shape2.png" alt="shape2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default IntroVideo;