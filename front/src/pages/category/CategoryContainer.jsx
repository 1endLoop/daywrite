import React from "react";
import { Link } from "react-router-dom";

const CategoryContainer = () => {
  return (
    <div>
      <div>
        <Link to="/">메인</Link>
        <Link to="/category">카테고리</Link>
        <Link to="/archive/history">아카이브</Link>
        <Link to="/community">커뮤니티</Link>
        <Link to="/login">Log in</Link>
      </div>
      <h1>카테고리</h1>
    </div>
  );
};

export default CategoryContainer;
