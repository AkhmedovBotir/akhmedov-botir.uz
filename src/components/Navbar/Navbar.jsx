import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './style.css'
function Navbars() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to={"/"}>
                        <span><b>Akhmedov Botir.</b></span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className='justify-content-between w-50'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/portfolio'}>Portfolio</NavLink>
                        <button className='nav-contact'>Contact 📞</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;