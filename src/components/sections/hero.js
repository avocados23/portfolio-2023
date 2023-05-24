import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../themecontext';

export const Hero = ({title, md}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Container fluid className={theme === 'light' ? 'hero' : 'hero dark'}>
            <Row>
                <Col>
                    <div className={md ? "container-fluid" : "container"} style={{paddingLeft:md ? "0.5rem" : 0,paddingRight:md ? "0.5rem" : 0}}>
                        <Row className="d-flex justify-content-center">
                            <Col xl={9} lg={12}>
                                <h6 className="mono" style={{color:"#E2D1F9"}}>Hi, my name is</h6>
                                <h1 className="title welcome">{title}</h1>
                                <h1 className="welcome welcome-muted">I enjoy designing and building things through code.</h1>
                                <p style={{marginTop:'32px'}} className="welcome-muted">
                                    I am a recent Virginia Tech computer science graduate, looking to apply my passion, creativity, and problem-solving skills in designing a great digital experience. Currently, I am looking for a job that allows me to do such.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};