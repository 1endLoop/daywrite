import React from "react";
import { Link, Outlet } from "react-router-dom";

const ArchiveContainer = () => {
  return (
    <div>
      <div>
        <Link to="/">메인</Link>
        <Link to="/category">카테고리</Link>
        <Link to="/archive/history">아카이브</Link>
        <Link to="/community">커뮤니티</Link>
        <Link to="/login">Log in</Link>
      </div>
      <div>
        <Link to="/archive/history">히스토리</Link>
        <Link to="/archive/calendar">캘린더</Link>
        <Link to="/archive/bookmark">북마크</Link>
        <Link to="/archive/liked">LIKED</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ArchiveContainer;
