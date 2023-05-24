import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../themecontext';

export const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container fluid className={theme === 'light' ? 'footer' : 'footer-dark'}>
            <Row style={{padding:'1.5rem 0rem'}}>
                <Col>
                    <center>
                        <p className="mono footer-text">Designed by Nam Tran.</p>
                    </center>
                </Col>
            </Row>
        </Container>
    )
};