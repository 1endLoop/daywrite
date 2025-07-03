import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import S from "./bookmark.typed.style";
import useClickOutside from "../../modules/hooks/useClickOutside";
import Dropdown from "../../components/dropdown/Dropdown";
import HistoryCard from "./HistoryCard";

const BookmarkTyped = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setDropdownOpen(false));

  const dropdownInfo = dropdownOpen && {
    x: dropdownOpen.x,
    y: dropdownOpen.y,
  };

  const handleMoreClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownOpen({
      x: rect.left,
      y: rect.bottom,
    });
  };

  const items = [
    {
      date: "2025.06.28",
      title: "무기여 잘 있거라",
      content: "언젠가 내가 없었겠지, 몇 년 전일 수도...",
      author: "아니스톤 해밍웨이",
      music: "Love on Top",
      artist: "John Canada",
    },
  ];

  return (
    <>
      {/* 상단 타이틀 영역 */}
      <S.TopRow>
        <S.BackBtn onClick={() => navigate(-1)}>◀</S.BackBtn>
        <S.PageTitle>북마크한 모든 글</S.PageTitle>
        <S.CountText>{items.length}개의 글</S.CountText>
        <S.SearchBar placeholder="검색어를 입력하세요" />
      </S.TopRow>

      {/* 메인 콘텐츠 */}
      <S.ContentWrapper>
        {/* 왼쪽: 썸네일 & 폴더 정보 */}
        <S.ThumbnailBox>
          <S.Thumbnail src="/assets/images/book-img.jpeg" />
          <S.FolderTitleRow>
            <S.FolderTitle>북마크한 모든 글</S.FolderTitle>

            <S.MenuWrapper>
              <S.MoreBtn onClick={handleMoreClick}>⋯</S.MoreBtn>
              {dropdownInfo && (
                <Dropdown
                  refProp={dropdownRef}
                  x={dropdownInfo.x}
                  y={dropdownInfo.y}
                  onClose={() => setDropdownOpen(false)}
                >
                  <li>이름변경</li>
                  <li>폴더삭제</li>
                </Dropdown>
              )}
            </S.MenuWrapper>
          </S.FolderTitleRow>
          <S.EditButton>편집</S.EditButton>
        </S.ThumbnailBox>

        {/* 북마크 카드 리스트 */}
        <S.CardColumn>
          {items.map((item, idx) => (
            <HistoryCard key={idx} data={item} />
          ))}
        </S.CardColumn>
      </S.ContentWrapper>
    </>
  );
};

export default BookmarkTyped;
