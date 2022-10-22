import React, { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pm-news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div>
        {categories.map((category) => (
          <p className="text-start" key={category.id}>
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
