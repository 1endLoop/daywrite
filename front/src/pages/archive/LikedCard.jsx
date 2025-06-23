import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Card from "./liked.card.style";

const LikedCard = ({ data }) => {
  const { date, content, title, author, music, artist } = data;

  return (
    <Card.Card>
      <Card.Header>
        <Card.HeaderLeft>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </Card.HeaderLeft>

        <Card.LikeIcon>
          <img src="../assets/images/icons/svg/like.svg" alt="like" />
        </Card.LikeIcon>
      </Card.Header>
      <Card.Content>{content}</Card.Content>

      <Card.Divider />

      <Card.BottomWrapper>
        <Card.MusicInfo>
          <Card.Action>
            <img src="../assets/images/icons/svg/like=on.svg" alt="like" />
          </Card.Action>
          <span role="img" aria-label="music">
            🎵
          </span>
          <span className="music-name">{music}</span>
          <span className="artist">{artist}</span>
        </Card.MusicInfo>

        <Card.Date>{date}</Card.Date>
      </Card.BottomWrapper>
    </Card.Card>
  );
};

export default LikedCard;
