import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pm-news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="text-start mt-3">
      <h4 className="text-center mb-2">All Categories</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="btn btn-outline-primary w-100"
              to={`category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
