import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>
        <Link to="/">메인</Link>
        <Link to="/category">카테고리</Link>
        <Link to="/archive/history">아카이브</Link>
        <Link to="/community">커뮤니티</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/login">Log in</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;