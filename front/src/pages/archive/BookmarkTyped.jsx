import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import S from "./bookmark.section.style";
import useClickOutside from "../../modules/hooks/useClickOutside";
import Dropdown from "../../components/dropdown/Dropdown";
import HistoryCard from "./HistoryCard";

const BookmarkTyped = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL의 :id 사용
  const [dropdownInfo, setDropdownInfo] = useState(null);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setDropdownInfo(null));

  const handleMoreClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownInfo({ x: rect.left, y: rect.bottom });
  };

  // 예시 데이터 (API 연동 시 대체 가능)
  const folder = {
    id,
    title: "북마크한 모든 글",
    imageUrl: "/assets/images/book-img.jpeg",
  };

  const items = [
    {
      date: "2024.05.12",
      content: "언젠가 내가 없었겠지, 몇 년 전일 수도...",
      title: "무기여 잘 있거라",
      author: "아니스톤 해밍웨이",
      music: "Love on Top",
      artist: "John Canada",
    },
    {
      date: "2024.05.10",
      content: "세상은 고요하게 만들어졌어, 바다를 걷듯이...",
      title: "무기여 잘 있거라",
      author: "아니스톤 해밍웨이",
      music: "Love on Top",
      artist: "John Canada",
    },
  ];

  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>북마크</S.Title>
        <S.MenuWrapper>
          <S.MoreBtn onClick={handleMoreClick}>⋯</S.MoreBtn>
          {dropdownInfo && (
            <Dropdown refProp={dropdownRef} x={dropdownInfo.x} y={dropdownInfo.y} onClose={() => setDropdownInfo(null)}>
              <li>📎 이름변경</li>
              <li>🗑 폴더삭제</li>
            </Dropdown>
          )}
        </S.MenuWrapper>
      </S.TitleRow>

      <S.FolderDetailWrapper>
        <S.Thumbnail src={folder.imageUrl} alt="폴더 썸네일" />
        <div>
          <S.FolderName>{folder.title}</S.FolderName>
          <S.FolderEdit>✏️ 편집</S.FolderEdit>
        </div>
      </S.FolderDetailWrapper>

      <S.FolderCardList>
        {items.map((item, idx) => (
          <HistoryCard key={idx} data={item} />
        ))}
      </S.FolderCardList>
    </S.Container>
  );
};

export default BookmarkTyped;
