import React from 'react';
import ProfileHome from './ProfileHome';
import S from './style';

const MyPageContainer = () => {
  return (
      <S.Wrapper>
        <S.Sidebar>
          <S.Title>MY PAGE</S.Title>
          <S.MenuSection>
            <S.MenuItem active>내 프로필</S.MenuItem>
            <S.MenuItem>타이핑 화면세팅</S.MenuItem>
            <S.MenuItem>개인정보 수정</S.MenuItem>
            <S.MenuItem>카테고리 데이터</S.MenuItem>
          </S.MenuSection>
          <S.Divider />
          <S.MenuSection>
            <S.MenuItem>공지사항</S.MenuItem>
            <S.MenuItem>FAQ</S.MenuItem>
            <S.MenuItem>1:1 문의하기</S.MenuItem>
            <S.MenuItem>약관</S.MenuItem>
          </S.MenuSection>
          <S.Bottom />
        </S.Sidebar>

        <S.Content>
          <ProfileHome />
        </S.Content>
      </S.Wrapper>

  );
};

export default MyPageContainer;