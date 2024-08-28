import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer py-4'>

      <div className="container">
        <Row>
          <Col>
            <div className="footer-title">Akhmedov Botir.</div>
          </Col>
          <Col className='d-flex justify-content-around footer-font'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/portfolio"}>Contact</Link>
          </Col>
          <Col className='text-end'>Copyright © 2024 Botir.</Col>
        </Row>
      </div>

    </div>
  )
}
