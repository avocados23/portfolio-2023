import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Row, Col, Nav, Form, Button, Offcanvas } from 'react-bootstrap';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaRegMoon, FaMoon } from 'react-icons/fa';

import useWindowSize from '../hooks/useWindowSize';
import abstract from '../../static/Most_recent_resume.pdf';
import { ThemeContext } from './themecontext';

export const StyledNavbar = ({showBg, md, setMd, aboutRefScrollFunc, projectsRefScrollFunc}) => {
    const [show, setShow] = useState(false);

    const viewport = useWindowSize();

	useEffect(() => {
		if (viewport.width > 768) {
			setMd(false);
            setShow(false);
		} else {
			setMd(true);
		}
	}, [viewport, setMd]);

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Navbar fixed="top" className={showBg ? `navbar-with-bg ${theme === 'light' ? 'scrolled' : 'scrolled-dark'}` : "navbar-with-bg"} style={{padding: md ? "1rem 0.5rem" : undefined}}>
                <div style={{width:"100%",paddingRight:0}} className={md ? "container-fluid" : "container"}>
                    <Row className="d-flex justify-content-between" style={{width:"100%"}}>
                        <Col md={8} sm={8} xs={8}>
                            <Nav.Link href="#" className={showBg ? `navbar-text logo link ${theme === 'light' ? 'scrolled' : 'scrolled-dark'}` : "navbar-text logo link"} style={{fontSize:md ? '16px' : undefined}}>
                                Nam Tran
                            </Nav.Link>
                        </Col>
                        <Col md={4} sm={4} xs={4} className="d-lg-none d-flex justify-content-end" style={{paddingRight:0}}>
                            <div style={{padding:"0.5rem 0.75rem 0.5rem 0.5rem",position:"relative",top:-2}} onClick={toggleTheme} onKeyDown={toggleTheme} role="button" tabIndex={0}>
                            {
                                theme === 'light' 
                                ? <FaRegMoon size={18} className={`toggle-theme ${showBg ? 'scrolled' : 'lavender'}`} />
                                : <FaMoon size={18} className={`toggle-theme ${showBg && theme !== 'dark' ? 'scrolled' : 'lavender'}`} />
                            }
                            </div>
                            <BiMenuAltRight size={32} className={showBg ? `mobile-menu ${theme === 'light' ? 'black' : 'scrolled-darkmode'}` : "mobile-menu"} onClick={() => setShow(true)} />
                        </Col>
                        <Col className="d-none d-lg-flex justify-content-end" style={{paddingRight:0}} md={4} sm={4}>
                            <Nav>
                                <a href="#about" className={showBg ? `navbar-text ${theme === 'light' ? 'scrolled' : 'scrolled-dark'} link` : "navbar-text link"} onClick={aboutRefScrollFunc}>About</a>
                                <a href="#projects" className={showBg ? `navbar-text ${theme === 'light' ? 'scrolled' : 'scrolled-dark'} link` : "navbar-text link"} onClick={projectsRefScrollFunc}>Projects</a>
                                <Form style={{position:"relative",top:1}}>
                                    <Button variant="outline-dark" className={showBg ? `resume-button ${theme === 'light' ? 'scrolled' : 'scrolled-dark'}` : "resume-button"} href={abstract}>
                                        <span className={showBg ? `resume-button-text ${theme === 'light' ? 'scrolled' : 'scrolled-dark'}` : "resume-button-text"}>Abstract</span>
                                    </Button>
                                </Form>
                                <div style={{padding:"0.5rem",border:"none"}} onClick={toggleTheme} role="button" tabIndex={0} onKeyDown={toggleTheme}>
                                {
                                    theme === 'light' 
                                    ? <FaRegMoon size={24} className={`toggle-theme ${showBg ? 'scrolled' : 'lavender'}`} />
                                    : <FaMoon size={24} className={`toggle-theme ${showBg && theme !== 'dark' ? 'scrolled' : 'lavender'}`} />
                                }
                                </div>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </Navbar>
            <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Site Map</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <a href="#about" className="offcanvas-menu" onClick={() => { setShow(false); aboutRefScrollFunc(); }}>About</a>
                    <a href="#projects" className="offcanvas-menu" onClick={() => {setShow(false); projectsRefScrollFunc();}}>Projects</a>
                    <a href="mailto:namht@vt.edu" className="offcanvas-menu" onClick={() => setShow(false)}>Contact</a>
                    <Button variant="outline-dark" className="resume-button scrolled" href={abstract}>Abstract</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};