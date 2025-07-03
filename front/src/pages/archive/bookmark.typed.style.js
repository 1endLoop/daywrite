import styled from "styled-components";

const S = {};

// 전체 레이아웃
S.TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 0 0;
  gap: 3px;
`;

S.BackBtn = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

S.PageTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

S.CountText = styled.span`
  font-size: 14px;
  color: gray;
  margin-left: 8px;
`;

S.SearchBar = styled.input`
  margin-left: auto;
  width: 240px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

// 본문 내용
S.ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 0 0 0;
`;

// 썸네일 영역
S.ThumbnailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
`;

S.Thumbnail = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  margin-bottom: 5px;
`;

S.FolderTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;   // 폴더명과 아이콘을 수직 가운데 정렬
  width: 100%;
  margin-top: 10px;
`;

S.FolderTitle = styled.h3`
  font-size: 16px;
  line-height: 1.4;     
`;

S.EditButton = styled.button`
  background: none;
  border: none;
  color: gray;
  font-size: 14px;
  cursor: pointer;
`;

S.MenuWrapper = styled.div`
  display: flex;
  align-items: center; // 아이콘을 가운데 정렬
`;

S.MoreBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  line-height: 1; //  텍스트 기준 위치 조정
`;

// 카드 영역
S.CardColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default S;
