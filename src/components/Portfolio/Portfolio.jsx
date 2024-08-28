import React from 'react'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'
import img from "../../img/bg.png"
import "./style.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function Portfolio() {
    const badge = [
        { variant: "danger", text: "html" },
        { variant: "primary", text: "css" },
        { variant: "warning", text: "js" },
        { variant: "dark", text: "bootstrap" },
        { variant: "info", text: "react" },
        { variant: "danger", text: "sass" },
        { variant: "info", text: "tailwindCSS" },
        { variant: "primary", text: "material-ui" },
        { variant: "danger", text: "jQuery" },
    ]
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "This is a project description.",
            github: "https://github.com/botirakhmedov/project1",
            live: "https://project1.com",
            badges: [
                badge[0], badge[1], badge[2], badge[3], badge[4],
            ]
        },
        {
            id: 1,
            title: "Project 1",
            description: "This is a project description.",
            github: "https://github.com/botirakhmedov/project1",
            live: "https://project1.com",
            badges: [
                badge[0], badge[1], badge[2], badge[3], badge[4],
            ]
        },
        {
            id: 1,
            title: "Project 1",
            description: "This is a project description.",
            github: "https://github.com/botirakhmedov/project1",
            live: "https://project1.com",
            badges: [
                badge[0], badge[1], badge[2], badge[3], badge[4],
            ]
        },
    ]

    return (
        <div className='portfolio py-5'>
            <Container>
                <div className="portfolio-body">
                    <h1 className='bold-font'>Portfolio</h1>
                    <p>This is where you will display your projects.</p>
                </div>
                <br />
                <Row xs={2} md={3} className="g-4 cardclass">
                    {
                        projects.map(res => {
                            return (

                                <Col className='cardportfolio'>
                                    <Card>
                                        <Card.Img variant="top" style={{ backgroundImage: `url(${img})` }} width={100} height={250} />
                                        <Card.Body>
                                            <Card.Title className='fw-bold'>{res.title}</Card.Title>
                                            <Card.Text>
                                                {res.description}
                                            </Card.Text>
                                            {
                                                res.badges.map(badge => (
                                                    <Badge pill key={badge.variant} bg={badge.variant} className='m-1'>{badge.text}</Badge>
                                                ))
                                            }
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="cardlink w-75 d-flex justify-content-evenly">
                                                <a href={res.github} target="_blank" rel="noopener noreferrer" className="portfolio-btn px-4 py-1 fw-bold"><GitHubIcon className='fs-5' /> Github</a>
                                                <a href={res.live} target="_blank" rel="noopener noreferrer" className="portfolio-btn1 px-4 py-1 fw-bold"><LanguageIcon className='fs-5' /> Live</a>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>

                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
