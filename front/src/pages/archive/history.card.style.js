import styled from "styled-components";
import GlobalStyle from "../../global/global";

const Card = {}

Card.Card = styled.div`
  background-color: #fff;
  padding: 24px 22px 24px 22px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.08); */
  font-family: pretendard;
`;

Card.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`

Card.Date = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #282828;
  margin-bottom: 12px;
`;

Card.MoreBtn = styled.div`
  cursor: pointer;
  font-size: 18px;
  color: #666;
`;

Card.Content = styled.p`
  font-size: 15px;
  color: #282828;
  line-height: 1.7;
  margin-bottom: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: brea-word;
`;

Card.Divider = styled.div`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0 0 20px 0;
`

Card.MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Card.MetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .title {
    font-size: 14px;
    color: #282828;
    font-weight: 500;
  }

  .author {
    font-size: 13px;
    color: #787878;
  }
`;

Card.MetaRight = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

Card.Icon = styled.span`
  font-size: 14px;
`;

Card.Action = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

Card.Music = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #333;

  .music-name {
    font-weight: 500;
  }

  .artist {
    color: #999;
  }
`;


export default Card;
