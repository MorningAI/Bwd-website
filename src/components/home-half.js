import React from 'react';
import HeroHalf from './home-components/hero-half';
import Features from './home-components/features';
import About from './home-components/about';
import AboutIntro from './home-components/about-intro';
import HowWorks from './home-components/how-works';
import Screenshot from './home-components/screenshots';
import SpecialFeatures from './home-components/special-features';
import ScreenshotsV2 from './home-components/screenshots-v2';
import Pricing from './home-components/pricing';
import VideoPromo from './home-components/video-promo';
import Testimonial from './home-components/testimonial';
import Subscribe from './home-components/subscription';
import FactsSection from './home-components/facts-section';
import Blog from './home-components/blog';
import Contact from './home-components/contact';



const HomeHalf = () => {
    return <div>
        <HeroHalf />
        <Features />
        <About />
        <AboutIntro />
        <HowWorks />
        <Screenshot />
        <SpecialFeatures />
        <ScreenshotsV2 />
        <Pricing />
        <FactsSection />
        <Testimonial />
        <Subscribe />
        <VideoPromo />
        <Blog />
        <Contact />
    </div>
}


export default HomeHalf
