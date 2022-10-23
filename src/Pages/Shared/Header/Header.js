import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaPlus, FaHome, FaSignOutAlt, FaKey, FaRegEdit } from "react-icons/fa";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import ProImg from "../../../asset/profile/profile.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then((result) => console.log("LogOut Success! Ta Ta Bye Bye"));
  };
  return (
    <header className="border-bottom border-warning mb-2">
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
              <Button
                variant="danger"
                className="fw-bolder btn-sm me-2 my-2"
                as={Link}
                to="/home"
              >
                <FaHome /> Home
              </Button>

              <Button variant="danger" className="fw-bolder btn-sm me-2 my-2">
                <FaPlus /> Advertise
              </Button>

              <div className="d-flex">
                {user?.photoURL ? (
                  <>
                    <Button
                      variant="danger"
                      onClick={handleSignOut}
                      className="fw-bolder btn-sm me-2 my-2"
                    >
                      <FaSignOutAlt /> Log Out
                    </Button>
                    <img
                      width="50"
                      className="border rounded-circle border-warning"
                      src={user.photoURL}
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <Button
                      variant="danger"
                      as={Link}
                      to="/register"
                      className="fw-bolder btn-sm me-2 my-2"
                    >
                      <FaRegEdit /> Register
                    </Button>
                    <Button
                      variant="danger"
                      as={Link}
                      to="/login"
                      className="fw-bolder btn-sm me-2 my-2"
                    >
                      <FaKey /> Login
                    </Button>
                    <img
                      width="50"
                      className="border rounded-circle border-warning"
                      src={ProImg}
                      alt=""
                    />
                  </>
                )}
                <h5 className="align-self-center ms-2">{user?.displayName}</h5>
              </div>
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
