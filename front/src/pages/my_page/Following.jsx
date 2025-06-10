import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 600px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 999;
  padding: 24px 40px
`;

const BackButton = styled.img`
  position: absolute;
  top: 24px;
  left: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  margin-bottom: 32px;
  margin-top: 10px;
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;

  div {
    padding: 12px 0;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 66.6666%; /* 오른쪽 탭 기준 */
    width: 33.3333%; /* 전체의 1/3 */
    height: 1.5px;
    background-color: #f96f3d;
    border-radius: 1px;
    z-index: 2;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f2f2f2;
  border-radius: 12px;
  padding: 6px 12px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  flex: 1;
  padding: 6px 8px;
  font-size: 14px;
  outline: none;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #f26c44;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15;
    
    span:first-child {
      font-size: 17px;
      font-weight: 500;
      
    }

    span:last-child {
      margin-top: 1px;
      font-size: 12px;
      color: #9F9F9F;
    }
  }
`;

const FollowButton = styled.button`
  align-items: center;
  justify-content: center;
  background: #5d2c17;
  color: white;
  padding: 7px 18px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

const Following = ({ onClose }) => {
  return (
    <Popup>
      <BackButton src="/assets/images/icons/back.png" alt="뒤로가기" onClick={onClose} />

      <Title>예닮</Title>

      <TabMenu>
        <div>5 공유한 글</div>
        <div>1000 팔로워</div>
        <div>100 팔로잉</div>
      </TabMenu>

      <SearchWrapper>
        🔍
        <SearchInput placeholder="검색" />
      </SearchWrapper>

      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/profile.JPG" alt="pochaco" />
          <div>
            <span>pochaco</span>
            <span>yedalmi@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>

      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/cat.JPG" alt="cat" />
          <div>
            <span>고양이</span>
            <span>cat@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>
      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/profile.JPG" alt="pochaco" />
          <div>
            <span>pochaco</span>
            <span>yedalmi@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>

      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/cat.JPG" alt="cat" />
          <div>
            <span>고양이</span>
            <span>cat@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>
      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/profile.JPG" alt="pochaco" />
          <div>
            <span>pochaco</span>
            <span>yedalmi@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>

      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/cat.JPG" alt="cat" />
          <div>
            <span>고양이</span>
            <span>cat@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>
      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/profile.JPG" alt="pochaco" />
          <div>
            <span>pochaco</span>
            <span>yedalmi@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>

      <UserItem>
        <ProfileInfo>
          <img src="/assets/images/profiles/cat.JPG" alt="cat" />
          <div>
            <span>고양이</span>
            <span>cat@gmail.com</span>
          </div>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </UserItem>
      
    </Popup>
  );
};

export default Following;



