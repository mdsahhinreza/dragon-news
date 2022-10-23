import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2>This Category has {news.length} news</h2>
      {news.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
