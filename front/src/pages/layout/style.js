import styled from 'styled-components';

const S = {};

// 전체 뷰 고정
S.Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

// 배경 이미지 (고정)
S.Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/assets/images/snow.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
`;

// 고정 헤더
S.Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

S.HeaderContent = styled.div`
  width: 1250px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.Logo = styled.img`
  height: 30px;
`;

S.Nav = styled.nav`
  display: flex;
  gap: 50px;

  a {
    font-size: 20px;
    font-weight: 400;
    color: #282828;
    text-decoration: none;

    &:hover {
      color: #f26c44;
    }
  }
`;

S.Login = styled.div`
  margin-right: 8px;
  a {
    font-size: 20px;
    font-weight: 400;
    color: #282828;
    text-decoration: none;

    &:hover {
      color: #f26c44;
    }
  }
`;

// 내부 콘텐츠 스크롤 가능 영역
S.Wrapper = styled.div`
  position: absolute;
  top: 72px; /* header 높이 */
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 5;

  width: 1250px;
  margin: 0 auto;
  padding: 40px;
  background-color: white;
  /* border-radius: 16px; */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export default S;









