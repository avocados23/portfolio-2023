import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Headshot } from '../headshot';

import me_img from '../../../static/me.png';

export const About = ({md}) => {
    return (
        <div style={{backgroundColor:"white",paddingLeft:md ? "3rem" : undefined,paddingRight:md ? "3rem" : undefined}}
        className={md ? "container-fluid" : "container"} id="about"> 
            <Row className="d-flex justify-content-center" style={{padding:"5rem 0rem"}}>
                <Col xl={10} lg={10} md={12} className="d-flex">
                    <div style={{marginRight:'48px'}}>
                        <h1 className="title about-me">About me</h1>
                        <p className="home-page-text">
                            Hello! My name is Nam Tran and I enjoy building things through code as a creative outlet.
                            I started coding back in 2011 trying to build my own <a href="https://en.wikipedia.org/wiki/Club_Penguin" className="external">Club Penguin</a>
                            &nbsp;private server.
                            <br /><br />
                            Fast forward to today, I graduated from the <a href="https://eng.vt.edu/" className="external">Virginia Tech College of Engineering</a> with a bachelor's degree in computer science.
                            I've had the privilege of interning at a <a href="https://triblio.com/" className="external">software marketing company</a> and closely with&nbsp;
                            <a href="https://www.vtti.vt.edu/staffdir/bio.php?&pn=04208" className="external">professors</a> during my time as a student.
                            I enjoy both facets of full-stack app development, but my greatest passion is in frontend software development, both in web and mobile applications.
                            <br/><br />
                            I most recently launched a web app, <a href="https://www.availabowl.com/" className="external">Availabowl</a>, which allows students to sign up,
                            review, and view others' opinions on dining halls at their university.
                            <br/><br/>
                            Here are a few technologies I've been working with, recently:
                        </p>
                        <ul className="technology-list">
                            <li>
                                <p className="technology">React / React Native</p>
                            </li>
                            <li>
                                <p className="technology">Node.js</p>
                            </li>
                            <li>
                                <p className="technology">JavaScript (ES6+)</p>
                            </li>
                            <li>
                                <p className="technology">TypeScript</p>
                            </li>
                            <li>
                                <p className="technology">Python</p>
                            </li>
                            <li>
                                <p className="technology">Gatsby</p>
                            </li>
                        </ul>
                    </div>
                    <div className="d-none d-md-block">
                        <Headshot photo={me_img} width={300} height={300} color="black" />
                    </div>
                </Col>
                <Col className="d-flex d-md-none justify-content-center" style={{marginTop:'32px'}}>
                    <Headshot photo={me_img} width={300} height={300} color="black" />
                </Col>
            </Row>
        </div>
    )
};