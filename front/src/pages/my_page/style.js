import styled from 'styled-components';

const S = {};

S.Wrapper = styled.div`
  width: 1250px;
  min-height: calc(100vh - 30px); /* ⬆️ 위 여백을 뺀 만큼 최소 높이 설정 */
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
  padding: 100px 24px;
  font-size: 20px;
  margin-top: -60px;
  margin-left: -14px;
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
  gap: 20px;
  margin-bottom: 24px;
`;

S.MenuItem = styled.div`
  font-size: 18px;
  padding: 8px 0;
  cursor: pointer;
  color: ${({ active }) => (active ? '#f26c44' : '#000000')};
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
`;

S.Divider = styled.hr`
  border: none;
  border-top: 1px solid black;
  margin: 24px 0;
`;

S.Content = styled.main`
  flex: 1;
  padding: 80px 40px 48px;  // ✅ 충분한 여백
  background: white;
  overflow-y: auto;
`;

S.Bottom = styled.hr`
  border: none;
  border-top: 2px solid black;
  margin: 24px 0;
`


// ProfileHome.jsx 스타일
// 📍 프로필 전체 컨테이너
S.ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

// 📍 섹션 제목
S.SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

// ✅ 상단 영역: 왼쪽(프로필) + 오른쪽(공유글/팔로워/팔로잉)
S.ProfileTopRow = styled.div`
  display: flex;
  justify-content: flex-start;     // 왼쪽 정렬
  align-items: center;
  gap: 200px;                        // 👉 프로필과 통계 사이 간격
  margin-top: -10px;
`;

// 📍 왼쪽 프로필 정보
S.ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

S.Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #eee;
`;

S.Nickname = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

S.Email = styled.div`
  font-size: 15px;
  color: #9F9F9F;
  margin-top: 8px;
`;

// ✅ 오른쪽 통계들 (네모박스 제거, 왼쪽 정렬)
S.StatsRow = styled.div`
  display: flex;
  gap: 100px; /* ✅ 간격 더 넓게 */
  justify-content: flex-start;
`;

S.StatBox = styled.div`
  text-align: center;

  span {
    font-size: 20px;
    font-weight: bold;
    display: block;
  }

  label {
    font-size: 14px;
    color: #666;
  }
`;

// 📍 통계 카드 3개
S.InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;

`;


S.InfoCard = styled.div`
  background: #f2f2f2;
  padding: 18px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
`;

// 📍 레벨 바
S.LevelBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

S.LevelText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

S.LevelBar = styled.div`
  width: 100%;
  max-width: 800px;  
  height: 12px;
  background: #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

S.LevelProgress = styled.div`
  width: 100%;
  height: 100%;
  background: #FF00BB;      
  border-radius: 4px;     
`;

S.LevelLabel = styled.div`
  font-size: 12px;
  color: #666;
`;


export default S;