import React from 'react';
import Link from 'next/link';

const PageBannerStyle3 = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <>
            <div className="page-title-area bg-color">
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <ul>
                            <li>
                                <Link href={homePageUrl}>
                                    <a>{homePageText}</a>
                                </Link>
                            </li>
                            <li>{activePageText}</li>
                        </ul>
                    </div>
                </div>

                <div className="divider"></div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="banner-shape1">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
            </div>
        </>
    );
}

export default PageBannerStyle3;