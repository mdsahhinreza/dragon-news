import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Marquee from "react-fast-marquee";

const Home = () => {
  const allNews = useLoaderData();
  let brakingnews = "";

  for (const news of allNews) {
    brakingnews = brakingnews + news.title + ", ";
  }

  return (
    <div className="container w-100">
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" className="fw-bolder">
          News
        </Button>
        <Button variant="outline-danger" className="fw-bolder">
          <Marquee
            className="w-100"
            speed={50}
            pauseOnHover={true}
            gradient={false}
          >
            {brakingnews}
          </Marquee>
        </Button>
      </ButtonGroup>

      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Home;
