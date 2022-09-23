import React from 'react'

const Preloader = () => {
    return (
        <>
            <div className="preloader-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <img src="/images/black-logo.png" alt="logo" />
                        <p>Loading...</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .preloader-area {
                    position: fixed;
                    background: #fff;
                    width: 100%;
                    top: 0;
                    height: 100%;
                    z-index: 1010;
                    left: 0;
                    text-align: center;
                    opacity: .96;
                }
                .preloader-area img {
                    margin-bottom: 5px;
                }
                .preloader-area p {
                    font-size: 17px;
                }
            `}</style>
        </>
    )
}

export default Preloader;
