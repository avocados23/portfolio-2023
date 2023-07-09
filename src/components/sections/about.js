import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Headshot } from '../headshot';

import me_img from '../../../static/me.png';
import { ThemeContext } from '../themecontext';

export const About = ({md}) => {
    const { theme } = useContext(ThemeContext);

    return (
       <Container fluid style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
            <Row>
                <Col>
                    <div style={{paddingLeft:md ? "1rem" : undefined,paddingRight:md ? "1rem" : undefined}}
                     className={md ? `container-fluid ${theme === 'light' ? "about" : "about-dark"}` : `container ${theme === 'light' ? "about" : "about-dark"}`} id="about"> 
                        <Row className="d-flex justify-content-center" style={{padding:md ? "2.5rem 0rem" : "5rem 0rem"}}>
                            <Col xl={10} lg={10} md={12} className="d-flex">
                                <div style={{marginRight:md ? undefined : '48px',color: theme === 'light' ? "black" : "white"}}>
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
                                        review, and view others' opinions on dining halls at their university. Currently, I am streamlining its web version to be simplified and migrated to Next.js, and
                                        emphasizing its usage to be on mobile devices in React Native.
                                        <br/><br/>
                                        Here are a few technologies I've been working with, recently:
                                    </p>
                                    <ul className={theme === 'light' ? "technology-list" : "technology-list dark-mode"}>
                                        <li>
                                            <p className="technology">React</p>
                                        </li>
                                        <li>
                                            <p className="technology">Node.js</p>
                                        </li>
                                        <li>
                                            <p className="technology">React Native</p>
                                        </li>
                                        <li>
                                            <p className="technology">Python</p>
                                        </li>
                                        <li>
                                            <p className="technology">JavaScript (ES6+)</p>
                                        </li>
                                        <li>
                                            <p className="technology">Next.js</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-none d-md-block">
                                    <Headshot photo={me_img} width={300} height={300} color={theme === 'light' ? "black" : "white"} md={md} />
                                </div>
                            </Col>
                            <Col className="d-flex d-md-none justify-content-center" style={{marginTop:'32px'}}>
                                <Headshot photo={me_img} width={300} height={300} color={theme === 'light' ? "black" : "white"} md={md} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
       </Container>
    )
};