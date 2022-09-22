import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import homedata from '../../data/home.json';

class HeroFull extends Component {

    render () {
        let getData = homedata.heroFull
        let publicUrl = process.env.PUBLIC_URL
        const InlineStyle = {
            backgroundImage: 'url('+publicUrl+getData.img+')'
        }

        return ( 
        <section id="home" className="text-left color-white bg-parallax" data-stellar-background-ratio="0.5" style={InlineStyle}>
            <div className="color-overlay opacity-8"></div>
                <Container>
                    <Row className="full-height align-items-center">
                        <div className="hero-content col-sm-10 offset-sm-1 text-center p-100px-t p-50px-b">
                            <h2 className="m-30px-b">{getData.title}</h2>
                            <p className="m-50px-b">
                                {getData.desc}
                            </p>
                            <a href={getData.button.btnurl1} className="primary-btn">{getData.button.btn1}</a>
                            <a href={getData.button.btnurl1} className="primary-btn primary-btn-3">Read more</a>
                        </div>
                    </Row>
                </Container>
        </section>
    )
    }
}


export default HeroFull
