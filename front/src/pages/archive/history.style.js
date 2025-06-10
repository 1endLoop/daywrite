import React from "react";
import styled from "styled-components";

const S = {};

S.TabMenu = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  a {
    text-decoration: none;
    width: 25%;
  }
`;

S.TabItem = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 0 16px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ $isActive }) => ($isActive ? "#FF6F3F" : "#787878")};
  border-bottom: ${({ $isActive }) => ($isActive ? "2px solid #000000" : "none")}; // ✅ 선택된 탭만 검정 보더
  cursor: pointer;
  position: relative;
`;

export default S;
