import React from "react";
import S from "./history.detail";

const HistoryDetail = ({ data, onClose }) => {
  const { date, title, author, content, music, artist } = data;

  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <S.DateRow>
            <S.Date>{date}</S.Date>
            <S.IconGroup>
              <img src="../assets/images/icons/svg/bookmark=on.svg" alt="bookmark" />
              <S.CloseBtn onClick={onClose}>
                <img src="../assets/images/icons/svg/close.svg" alt="close" />
              </S.CloseBtn>
            </S.IconGroup>
          </S.DateRow>
        </S.Header>

        <S.Divider />

        <S.Content>{content}</S.Content>

        <S.SourceBox>
          <span className="label">출처</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </S.SourceBox>
        <S.Divider />

        <S.MusicSection>
          <S.MusicInfo>
            <S.LikeIcon src="../assets/images/icons/svg/like=on.svg" alt="like" />
            <S.AlbumImg src="../assets/images/album-image.png" alt="album" />
            <div>
              <S.MusicTitle>{music}</S.MusicTitle>
              <S.MusicArtist>{artist}</S.MusicArtist>
            </div>
          </S.MusicInfo>

          <S.MusicControls>
            <img src="../assets/images/icons/svg/music_prev.svg" alt="prev" />
            <img src="../assets/images/icons/svg/music_play.svg" alt="play" />
            <img src="../assets/images/icons/svg/music_next.svg" alt="next" />
          </S.MusicControls>
        </S.MusicSection>

        <S.MetaSection>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <S.MetaText>
              내가 선택한 카테고리 <S.Tags>위로 | 평온한 | 활력 | 짜증나는</S.Tags>
            </S.MetaText>
          </div>

          <S.ReWrite>
            {" "}
            다시 필사하기
            <img src="../assets/images/icons/svg/arrow_forward.svg" alt="arrow" />
          </S.ReWrite>
        </S.MetaSection>
      </S.Modal>
    </S.Overlay>
  );
};

export default HistoryDetail;
