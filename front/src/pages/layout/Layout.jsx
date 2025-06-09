import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* 자식 요소를 보여주는 컴포넌트 */}
      <Outlet />
    </div>
  );
};

export default Layout;