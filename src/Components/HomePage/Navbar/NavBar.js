import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './NavBar.css';

const NavBar = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));

    const history = useHistory();

    const handleLogOut = () => {
        localStorage.clear();
        history.go(0);
    }
    return (
        <Container>
            <Navbar bg="***" expand="lg">
                <Link to="/home">
                    <img src={logo} alt="" className="logo w-50 px-3"/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="navBar-link">Home</Link>
                        <Link to="/student/myEnrollment" className="navBar-link">Your Dashboard</Link>
                        <Link to="/admin/AddCourse" className="navBar-link">Admin</Link>
                        <Link to="#" className="navBar-link">Contact Us</Link> 
                        <Link to="#"><span style={{color:"#59585A"}}>{name}</span></Link>
                        {
                            email ?
                                <Button className="navBar-button" onClick={handleLogOut}>Logout</Button>
                                :
                                <Link to="/login">
                                    <Button className="navBar-button">Login</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
};

export default NavBar;