import React, { useState } from 'react';
import Following from './Following';
import Followers from './Followers';
import S from './style';

const ProfileHome = () => {
  const [isFollowingOpen, setIsFollowingOpen] = useState(false);

  return (
    <S.ProfileContainer>
      <S.SectionTitle>내 프로필</S.SectionTitle>

      <S.ProfileTopRow>
        <S.ProfileHeader>
          <S.Avatar src="/assets/images/profiles/profile.JPG" />
          <div>
            <S.Nickname>
              예닮
              <img
                src="/assets/images/icons/edit_2.png"
                alt="수정"
                width="24"
                style={{ marginLeft: '6px', cursor: 'pointer', verticalAlign: 'middle' }}
              />
            </S.Nickname>
            <S.Email>yedam@email.com</S.Email>
          </div>
        </S.ProfileHeader>

        <S.StatsRow>
          <S.StatBox>
            <span>5</span>
            <label>공유한 글</label>
          </S.StatBox>
          <S.StatBox >
            <span>1000</span>
            <label>팔로워</label>
          </S.StatBox>
          <S.StatBox onClick={() => setIsFollowingOpen(true)} style={{ cursor: 'pointer' }}>
            <span>100</span>
            <label>팔로잉</label>
          </S.StatBox>
        </S.StatsRow>
      </S.ProfileTopRow>

      <S.InfoGrid>
        <S.InfoCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/assets/images/icons/keyboard.png" alt="keyboard" width="24" />
            <span>필사 125개</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/assets/images/icons/fire.png" alt="fire" width="24" />
            <span>연속 15일</span>
          </div>
        </S.InfoCard>

        <S.InfoCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/assets/images/icons/star.png" alt="star" width="24" />
            <span>레벨 10</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/assets/images/icons/equalizer.png" alt="exp" width="24" />
            <span>Exp 1,810</span>
          </div>
        </S.InfoCard>

        <S.InfoCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/assets/images/icons/like.png" alt="heart" width="24" />
            <span>좋아요 352</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/assets/images/icons/comment2_filled.png" alt="comment" width="24" />
            <span>댓글 283</span>
          </div>
        </S.InfoCard>

      </S.InfoGrid>

      <S.LevelBarWrapper>
        <S.LevelText>
          <img
            src="/assets/images/icons/star.png"
            alt="level"
            width="28"
            style={{ marginRight: '8px', verticalAlign: 'middle' }}
          />
          레벨 10
        </S.LevelText>
        <S.LevelBar>
          <S.LevelProgress style={{ width: '80%' }} />
        </S.LevelBar>
        <S.LevelLabel>1,810 / 2,250</S.LevelLabel>
      </S.LevelBarWrapper>

      {isFollowingOpen && <Following onClose={() => setIsFollowingOpen(false)} />}
    </S.ProfileContainer>
  );
};

export default ProfileHome;


