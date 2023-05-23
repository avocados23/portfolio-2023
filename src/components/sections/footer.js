import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <Container fluid style={{backgroundColor:'#00539C'}}>
            <Row style={{padding:'1.5rem 0rem'}}>
                <Col>
                    <center>
                        <p className="mono" style={{color:"#E2D1F9",fontSize:14,marginBottom:0}}>Designed by Nam Tran.</p>
                    </center>
                </Col>
            </Row>
        </Container>
    )
};