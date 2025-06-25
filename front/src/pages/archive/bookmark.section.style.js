import styled from "styled-components";

const S = {};

S.Container = styled.div`
  position: relative;
  padding: 40px 0 0 0;
`;

S.Section = styled.div`
  margin-bottom: 50px;
`;

S.TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

S.Title = styled.h2`
  font-size: 20px;
`;

S.ViewAll = styled.button`
  font-size: 14px;
  color: #f86f03;
  background: none;
  border: none;
  cursor: pointer;
`;

S.CardRow = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 16px;
  // 스크롤바 숨기기
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`;

// 스크롤 버튼
S.ScrollWrapper = styled.div`
  position: relative;
  overflow: visible;
`;

S.ScrollLeftBtn = styled.button`
  position: absolute;
  top: 45%;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  color: #f96f3d;
  cursor: pointer;
`;

S.ScrollRightBtn = styled.button`
  position: absolute;
  top: 45%;
  right: 0;
  transform: translateY(-50%) translateX(50%); // → 오른쪽으로 반쯤 걸치게
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  color: #f96f3d;
  cursor: pointer;
`;

// BookmarkCard.jsx

S.Card = styled.div`
  width: 160px;
  flex-shrink: 0;
`;

S.Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

S.InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

S.CardTitle = styled.div`
  font-size: 14px;
`;

S.CardDesc = styled.div`
  font-size: 12px;
  color: gray;
`;

S.MenuWrapper = styled.div`
  position: relative;
`;

S.MoreBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

S.DropdownMenu = styled.ul`
  text-align: center;
  width: 88px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  list-style: none;
  padding: 8px 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: fixed;

  li {
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }
  }
`;

export default S;
