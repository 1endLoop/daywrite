import React from 'react';
import styled from 'styled-components';

const M = { };

M.Container = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 80px; // 왼쪽-오른쪽 간격
  padding: 0 40px; // 작은 화면에서도 보이게
`;

export default M;