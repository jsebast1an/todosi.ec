
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../favicon.ico';
/* css */
import './css/navBar.css'


function NavBar() {
    return (
        <>
            <Navbar expand="sm" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Todo Si
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="menu_collapse" />
                    <Navbar.Collapse id="menu_collapse">
                        <Nav className="menu_list">
                            <Nav.Link href="#intro">Inicio</Nav.Link>
                            <Nav.Link href="#firstSection">Categorías</Nav.Link>
                            <Nav.Link href="#secondSection">Productos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )  
}

export default NavBar