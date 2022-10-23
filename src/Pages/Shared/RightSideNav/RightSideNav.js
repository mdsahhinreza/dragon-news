import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../asset/brand/Brand1.png";
import Brand2 from "../../../asset/brand/Brand2.png";

const RightSideNav = () => {
  return (
    <div className="mt-3">
      <ButtonGroup vertical className="w-100 mb-2">
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub>Login with Github
        </Button>
      </ButtonGroup>
      <h6 className="text-start mt-3">Fllow Us On </h6>
      <hr />

      <ListGroup className="text-start">
        <ListGroup.Item className="mb-2">
          <FaFacebook /> Facebook
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaWhatsapp /> WhatsApp
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaTwitch /> Twitch
        </ListGroup.Item>
        <ListGroup.Item className="mb-2"> Turms and Condition</ListGroup.Item>
      </ListGroup>

      <div className="slider">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Brand1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Brand2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
