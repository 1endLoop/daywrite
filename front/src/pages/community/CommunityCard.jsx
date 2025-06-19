import React from "react";
import Card from "./community.card.style";

const CommunityCard = ({ data, onClick }) => {
  const {
    content,
    title,
    author,
    music,
    artist,
    profileImg = "", // ❗️이미지 없어도 에러 안 나게 기본값 처리
    likes = 0,
    comments = 0,
  } = data;

  return (
    <Card.Card onClick={onClick}>
      <Card.Header>
        <Card.LeftInfo>
          <Card.Profile src={profileImg || "/assets/images/default-profile.png"} alt="profile" />
          <Card.TitleWrapper>
            <span className="title">{title}</span>
            <span className="author">{author}</span>
          </Card.TitleWrapper>
        </Card.LeftInfo>
        <Card.RightInfo>
          <Card.RightGroup>
            <Card.LikeIcon src="../assets/images/icons/svg/like.svg" alt="like" />
            <span>{likes}</span>
          </Card.RightGroup>
          <Card.RightGroup>
            <Card.CommentIcon src="../assets/images/icons/svg/comment.svg" alt="comment" />
            <span>{comments}</span>
          </Card.RightGroup>
        </Card.RightInfo>
      </Card.Header>

      <Card.Content>{content}</Card.Content>
      <Card.Divider />
      <Card.MusicInfo>
        <Card.MusicLeft>
          <img src="/assets/images/icons/svg/like=on.svg" alt="like" style={{ width: "18px", height: "18px" }} />
          <span role="img" aria-label="music">
            🎵
          </span>
          <span className="music-name">{music}</span>
          <span className="artist">{artist}</span>
        </Card.MusicLeft>
      </Card.MusicInfo>
    </Card.Card>
  );
};

export default CommunityCard;
