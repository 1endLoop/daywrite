import styled from 'styled-components';

const S = {};

// S.Background = styled.div`
//   width: 100%;
//   height: 100vh;
//   min-height: 100vh;
//   height: auto;

//   background-image: url('/assets/images/sea1.jpg');
//   background-size: cover;
//   background-position: center;
//   padding: 50px 0;
//   padding-top: 50px; /* ⬆️ 위 여백만 주고 아래는 없음 */
// `;

S.Wrapper = styled.div`
  width: 1250px;
  min-height: 700px;
  min-height: calc(100vh - 60px); /* ⬆️ 위 여백을 뺀 만큼 최소 높이 설정 */
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  padding-bottom: 0;
  
`;

// 기존처럼 사이드바, 콘텐츠 분리
S.Sidebar = styled.aside`
  width: 220px;
  padding: 90px 24px;
  font-size: 20px;
`;

S.Title = styled.h5`
  font-size: 30px;
  border-bottom: 2px solid black;
  padding-bottom: 8px;
  margin-bottom: 24px;
`;

S.MenuSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 24px;
`;

S.MenuItem = styled.div`
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active }) => (active ? '#f26c44' : '#000')};
  cursor: pointer;

  &:hover {
    color: #f26c44;
  }
`;

S.Divider = styled.hr`
  border: none;
  border-top: 1px solid black;
  margin: 24px 0;
`;

S.Content = styled.main`
  flex: 1;
  padding: 48px 40px;
  background: white;
`;
S.Bottom = styled.hr`
  border: none;
  border-top: 2px solid black;
  margin: 24px 0;
`

export default S;