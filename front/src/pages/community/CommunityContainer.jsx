import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CommunityContainer = () => {
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
        <Link to="/community">홈</Link>
        <Link to="/community/list">전체글</Link>
        <Link to="/community/my">내가 쓴 글</Link>
        <Link to="/community/collection">컬렉션</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default CommunityContainer;