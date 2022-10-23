import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, author, details, rating } = news;
  return (
    <div style={{ minHeight: "85vh" }}>
      <Card>
        <Card.Img variant="top" src={image_url} />

        <Card.Body className="text-start">
          <Card.Title>{title}</Card.Title> <hr />
          <div className="d-flex justify-content-between px-5 py-3 mb-0">
            <h6>Author : {author.name} </h6>
            <h6>Published Date : {author.published_date}</h6>
            <h6>
              <FaStar></FaStar> <span className="pt-2">{rating?.number}</span>
            </h6>
          </div>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
