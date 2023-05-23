import React, { useState, useEffect } from 'react';
import { Navbar, Row, Col, Nav, Form, Button, Offcanvas } from 'react-bootstrap';
import { BiMenuAltRight } from 'react-icons/bi';
import useWindowSize from '../hooks/useWindowSize';
import abstract from '../../static/Most_recent_resume.pdf';

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
	}, [viewport]);

    return (
        <>
            <Navbar fixed="top" className={showBg ? "navbar-with-bg scrolled" : "navbar-with-bg"} style={{padding: md ? "1rem 2rem" : undefined}}>
                <div style={{width:"100%",paddingRight:0}} className={md ? "container-fluid" : "container"}>
                    <Row className="d-flex justify-content-between" style={{width:"100%"}}>
                        <Col>
                            <Nav.Link href="#" className={showBg ? "navbar-text logo link scrolled" : "navbar-text logo link"}>Nam Tran</Nav.Link>
                        </Col>
                        <Col className="d-lg-none d-flex justify-content-end" style={{paddingRight:0}}>
                            <BiMenuAltRight size={32} className={showBg ? "mobile-menu black" : "mobile-menu"} onClick={() => setShow(true)} />
                        </Col>
                        <Col className="d-none d-lg-flex justify-content-end" style={{paddingRight:0}}>
                            <Nav>
                                <a href="#about" className={showBg ? "navbar-text scrolled link" : "navbar-text link"} onClick={aboutRefScrollFunc}>About</a>
                                <a href="#projects" className={showBg ? "navbar-text scrolled link" : "navbar-text link"} onClick={projectsRefScrollFunc}>Projects</a>
                            </Nav>
                            <Form style={{position:"relative",top:1,marginLeft:'4px'}}>
                                <Button variant="outline-dark" className={showBg ? "resume-button scrolled" : "resume-button"} href={abstract}>
                                    <span className={showBg ? "resume-button-text scrolled" : "resume-button-text"}>Abstract</span>
                                </Button>
                            </Form>
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