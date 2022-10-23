import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, image_url, author, details, rating, total_view } = news;
  return (
    <div>
      <Card className="text-start my-2">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <div className="author d-flex">
              <div className="img">
                <img
                  width={50}
                  className="rounded-circle"
                  src={author.img}
                  alt=""
                />
              </div>
              <div className="info ms-2">
                <p className="p-0 m-0">{author.name}</p>
                <p className="p-0 m-0">{author.published_date}</p>
              </div>
            </div>
            <div className="share align-self-center">
              <FaRegBookmark />
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div>
            <img className="img-fluid w-100" src={image_url} alt="" />

            {details.length > 200 ? (
              <p>
                {details.slice(0, 250)}
                <Link className="text-decoration-none" to={`/news/${_id}`}>
                  {" "}
                  See More...
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <div>
            <FaStar className="text-warning me-2" />{" "}
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2" /> <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
