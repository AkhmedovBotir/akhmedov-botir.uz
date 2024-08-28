import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../img/bg.png"
import { Col, Row } from 'react-bootstrap';
import "./style.css";
import anddez from "../../img/anddez.png"
import design from "../../img/design.png"
import team from "../../img/team.png"
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
export default function PortfolioCarousel() {
    let arr = [
        {
            id: 1,
            img: anddez,
            subTitle: "Frontend",
            title: "AndDez",
            description: "This project is designed for disinfection service.",
            link: "https://desinfection.akhmedov-botir.uz",
        },
        {
            id: 2,
            img: team,
            subTitle: "Frontend",
            title: "Team website",
            description: "A website made for the team I met during my internship",
            link: "https://team.akhmedov-botir.uz",
        },
        {
            id: 3,
            img: design,
            subTitle: "Frontend",
            title: "Dezign",
            description: "Design site status from figma",
            link: "https://dezign.akhmedov-botir.uz",
        },
    ]
    return (
        <div className='py-5 container'>
            <h1 className='bold-font text-center'>Portfolio</h1>
            <p className='text-center py-3'>I am currently busy restoring my projects. New projects may be added soon</p>
            <div className="portfoliocard">
                <Row xs={2} md={3} className="g-4">
                    {
                        arr.map((item) => (
                            <Col>
                                <Card key={item.id} className='portfolio-card'>
                                    <Card.Img variant="top" style={{ backgroundImage: `url(${item.img})` }} width={100} height={250} />
                                    <Card.Body className='p-4'>
                                        <Card.Subtitle className="mb-2 text-muted ">{item.subTitle}</Card.Subtitle>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text className='py-2'>{item.description}</Card.Text>
                                        <a href={item.link} className='portfolio-btn py-2 px-5'>View  <EastIcon /></a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <Link to={"/portfolio"} className='portfolio-btn1 py-2 px-5'>More project</Link>
                </div>
            </div>
        </div>
    )
}
