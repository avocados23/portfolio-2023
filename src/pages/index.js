import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useSiteMetadata } from "../hooks/use-site-metadata"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../global.css';

import { useIsVisible } from "../hooks/useIsVisible";
import useWindowSize from "../hooks/useWindowSize";

import { Socials } from "../components/socials";
import { Projects } from "../components/sections/projects";
import { StyledNavbar } from "../components/navbar";
import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Footer } from "../components/sections/footer";

const Home = () => {
	const { title } = useSiteMetadata();

	const [showBg, setShowBg] = useState(false);

	const changeBg = () => {
		if (window.scrollY >= 66) {
			setShowBg(true);
		} else {
			setShowBg(false);
		}
	}

	const viewport = useWindowSize();
	const [md, setMd] = useState(false);

	useEffect(() => {
		if (viewport.width > 768) {
			setMd(false);
		} else {
			setMd(true);
		}
	}, [viewport]);

	useEffect(() => {
		changeBg();
		window.addEventListener("scroll", changeBg);
	}, []);

	const projectRef = useRef(null);
	const projectRefScroll = () => projectRef.current.scrollIntoView();
	const isVisible = useIsVisible(projectRef);
	
	const aboutRef = useRef(null);
	const aboutRefScroll = () => aboutRef.current.scrollIntoView();


	return (
		<>
			<Socials isVisible={isVisible} showBg={showBg} />
			<StyledNavbar setMd={setMd} md={md} showBg={showBg} aboutRefScrollFunc={aboutRefScroll} projectsRefScrollFunc={projectRefScroll} />
			<Hero title={title} md={md} />
			<div id="about" ref={aboutRef}>
				<About md={md} />
			</div>
			<Container fluid style={{backgroundColor:'#00539C'}} ref={projectRef}>
				<Row style={{paddingTop:md ? '4rem' : '8rem'}}>
					<Col>
						<Projects md={md} />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
};

export default Home;