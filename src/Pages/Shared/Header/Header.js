import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaUser, FaPlus } from "react-icons/fa";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" className="fw-bolder">
                Dragon
              </Button>
              <Button variant="outline-danger" className="fw-bolder">
                News
              </Button>
            </ButtonGroup>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Button variant="danger" className="fw-bolder btn-sm me-2 my-2">
                <FaPlus /> Advertise
              </Button>
              <Button
                variant="outline-secondary"
                className="fw-bolder btn-sm my-2"
              >
                <FaUser />
              </Button>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
