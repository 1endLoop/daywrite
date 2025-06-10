import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Card from "./history.card.style";
import Dropdown from "./dropdown.style";

const HistoryCard = ({ data }) => {
  const { date, content, title, author, music, artist } = data;
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Card.Card>
      <Card.Header>
        <Card.Date>{date}</Card.Date>
        <Dropdown.Wrapper ref={dropdownRef}>

        <Card.MoreBtn onClick={() => setOpenDropdown((prev) => !prev)}>⋯</Card.MoreBtn>
        {openDropdown && (
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => alert("공유하기!")}>공유하기</Dropdown.Item>
            <Dropdown.Item onClick={() => alert("삭제하기!")}>삭제하기</Dropdown.Item>
          </Dropdown.Menu>
        )}
        </Dropdown.Wrapper>
      </Card.Header>
      <Card.Content>{content}</Card.Content>

      <Card.Divider />

      <Card.MetaWrapper>
        <Card.MetaLeft>
          <Card.Icon>🔖</Card.Icon>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </Card.MetaLeft>

        <Card.MetaRight>
          <Card.Action>❤️</Card.Action>
          <Card.Music>
            <span role="img" aria-label="music">
              🎵
            </span>
            <span className="music-name">{music}</span>
            <span className="artist">{artist}</span>
          </Card.Music>
        </Card.MetaRight>
      </Card.MetaWrapper>
    </Card.Card>
  );
};

export default HistoryCard;
