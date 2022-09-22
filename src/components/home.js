import React from 'react';
import Hero from './home-components/hero';
import Features from './home-components/features';
import About from './home-components/about';
import AboutIntro from './home-components/about-intro';
import Screenshot from './home-components/screenshots';
import ScreenshotsV2 from './home-components/screenshots-v2';
import Pricing from './home-components/pricing';
import Testimonial from './home-components/testimonial';
import Subscribe from './home-components/subscription';
import Contact from './home-components/contact';

const Home = () => {
    return <div>
        <Hero />
        <Features />
        <About />
        <AboutIntro />
        <Screenshot />
        <ScreenshotsV2 />
        <Pricing />
        <Testimonial />
        <Subscribe />
        <Contact />
    </div>
}


export default Home
