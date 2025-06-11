import styled from "styled-components";

const S = {};

S.Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

S.Modal = styled.div`
  background: #fff;
  width: 680px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 32px 28px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

S.Date = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #555;
`;

S.CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

S.Title = styled.div`
  display: flex;
  align-items: center; // 수직 정렬
  gap: 6px;
  margin-bottom: 7px;
  .title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1; // 폰트 크기에 딱 맞게 줄 높이 설정
  }

  .author {
    font-size: 16px;
    font-weight: 500;
    color: #444;
    line-height: 1; // 동일하게 맞춰줌
  }
`;

S.SubInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 18px;

  strong {
    font-weight: 600;
    margin-left: 4px;
  }
`;

S.Content = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #222;
  margin-bottom: 24px;
  white-space: pre-wrap;
`;

S.MusicSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

S.MusicInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

S.LikeIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

S.AlbumImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
`;

S.MusicTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

S.MusicArtist = styled.div`
  font-size: 12px;
  color: #666;
`;

S.MusicControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 20px;
    height: 20px;
  }
`;

S.MetaSection = styled.div`
  display: flex;
  justify-content: space-between; // ⭐ 핵심!
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  color: #444;
  gap: 12px;
`;

S.BookmarkIcon = styled.img`
  width: 18px;
  height: 18px;
`;

S.MetaText = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${S.Tags} {
    margin-left: 6px;
    color: #888;
    font-size: 13px;
  }
`;

S.Tags = styled.span`
  margin-left: 6px;
  color: #888;
  font-size: 13px;
`;

S.RefillWrapper = styled.div`
  text-align: right;
  margin-top: 20px;
`;

S.RefillBtn = styled.button`
  border: none;
  background: none;
  color: #131313;
  font-weight: 600;
  cursor: pointer;
`;

export default S;
