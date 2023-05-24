import React, { useContext, useState } from 'react';
import { FiGithub, FiExternalLink, FiLink } from 'react-icons/fi';
import { Row, Col, Container } from 'react-bootstrap';
import { ThemeContext } from '../themecontext';

const projects = [
    {
        title: "Availabowl",
        description: 
        "Social network where college students sign up, review, and view others' opinions on dining halls at their university. Full project also contains an administrator app to manage overall data. You can also view my blog where I discuss progress and changes to the app.",
        platforms: ["React", "MongoDB", "Node.js", "Express", "EJS", "AWS", "OAuth"],
        external: "https://www.availabowl.com/",
        blog: "https://availabowldevs.wordpress.com/"
    },
    {
        title: "Smart Parking",
        description: "Mobile application that displays estimated parking spot availability through machine learning forecasting at James Madison University.",
        platforms: ["React Native", "MongoDB", "Flask", "Prophet", "Machine Learning"],
        github: "https://github.com/avocados23/capstone-spring2023_flask"
    },
    {
        title: "Virginia Tech Menu",
        description: "Deprecated Availabowl feature that is able to webscrape available food at a dining hall and return it as a JSON-friendly output, including vegan and vegetarian restrictions. Repository also includes webscraper code for retrieving dining hall hours.",
        platforms: ["Node.js", "Puppeteer", "MongoDB", "Express", "Webscraping"],
        github: "https://github.com/availabowl/menu-webscraper"
    },
    {
        title: "Portfolio Template",
        description: "My open-sourced static site portfolio for anyone to use, designed from scratch in React, built in Gatsby, and deployed on Vercel.",
        platforms: ["React", "Gatsby", "Bootstrap", "GraphQL", "Styled Components"],
        github: "https://github.com/avocados23/portfolio-2023",
        external: "#"
    },
    {
        title: "Threadpool",
        description: "Work-stealing threadpool management program, utilizing the C POSIX library. Done as a project for my Computer Systems course, so it is available only on request.",
        platforms: ["C", "POSIX"]
    }
];

export const Projects = ({md}) => {
    const [index, setIndex] = useState(0);
    const { theme } = useContext(ThemeContext);

    return (
        <Container fluid style={{backgroundColor: theme === 'light' ? '#00539C' : 'black'}}>
            <Row style={{paddingTop:md ? '4rem' : '8rem'}}>
                <Col>
                    <div style={{paddingLeft:md ? "0.5rem" : undefined,paddingRight:md ? "0.5rem" : undefined}} className={md ? "container-fluid" : "container"} id="projects">
                        <Row className="d-flex justify-content-center">
                            <Col xl={9} lg={10} md={12} sm={12} xs={12}>
                                <h2 className="title projects">Notable projects</h2>
                                <div className={`d-flex projects-mobile d-lg-none`}>
                                    {
                                        projects.map((project, i) => (
                                            <div role="presentation" key={project.title} className={index === i ? "project active" : `project ${theme === 'dark' && 'dark'}`} onClick={() => setIndex(i)} onKeyDown={() => setIndex(i)}>{project.title}</div>
                                        ))
                                    }
                                </div>
                                <div className="notable-projects">
                                    <div className="projects d-none d-lg-block">
                                        {
                                            projects.map((project, i) => (
                                                <div role="button" tabIndex={0} key={project.title} className={index === i ? "project active" : `project ${theme === 'dark' && 'dark'}`} onClick={() => setIndex(i)} onKeyDown={() => setIndex(i)}>{project.title}</div>
                                            ))
                                        }
                                    </div>
                                    <div className="container-info">
                                        <h4 className="project-title">{projects[index].title}</h4>
                                        <div className={`project-description ${theme === 'dark' && 'dark'}`}>
                                            <p>{projects[index].description}</p>
                                        </div>
                                        <div className={`technologies ${theme === 'dark' && 'dark'}`}>
                                            {
                                                projects[index].platforms.map(platform => (
                                                    <p>{platform}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="externals">
                                            {
                                                projects[index].github && <a href={projects[index].github} aria-label="repository"><FiGithub size={24} className="icon" /></a>
                                            }
                                            {
                                                projects[index].external && <a href={projects[index].external} aria-label="external link"><FiExternalLink size={24} className="icon" /></a>
                                            }
                                            {
                                                projects[index].blog && <a href={projects[index].blog} aria-label="blog"><FiLink size={24} className="icon" /></a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}