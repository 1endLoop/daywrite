import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookmarkCard from "./BookmarkCard";
import S from "./bookmark.section.style";
import useScrollX from "../../modules/hooks/useScrollX";
import useClickOutside from "../../modules/hooks/useClickOutside";

const BookmarkSection = ({ title, type }) => {
  const navigate = useNavigate();
  const { ref: scrollRef, scroll } = useScrollX();
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  // 임시 북마크 목록 데이터
  const allItems = [
    {
      title: "니체 명언집",
      count: 10,
      type: "글",
      imageUrl: "/assets/images/book-img.jpeg",
    },
    {
      title: "니체 명언집",
      count: 10,
      type: "글",
      imageUrl: "/assets/images/book-img.jpeg",
    },
    {
      title: "니체 명언집",
      count: 10,
      type: "글",
      imageUrl: "/assets/images/book-img.jpeg",
    },
    {
      title: "니체 명언집",
      count: 10,
      type: "글",
      imageUrl: "/assets/images/book-img.jpeg",
    },
    {
      title: "니체 명언집",
      count: 10,
      type: "글",
      imageUrl: "/assets/images/book-img.jpeg",
    },
    {
      title: "니체 명언집",
      count: 10,
      type: "글",
      imageUrl: "/assets/images/book-img.jpeg",
    },
    {
      title: "니체 명언집",
      count: 10,
      type: "글",
      imageUrl: "/assets/images/book-img.jpeg",
    },
    {
      title: "사랑에 빠졌을 때",
      count: 8,
      type: "곡",
      imageUrl: "/assets/images/album-image.png",
    },
    {
      title: "포근한",
      count: 8,
      type: "곡",
      imageUrl: "/assets/images/profiles/cat.JPG",
    },
  ];

  // 글, 음악 구분 필터
  const filteredItems = allItems.filter((item) => item.type === type);

  // 드롭다운 상태 관리 (아래 안 짤리도록)
  const [dropdownInfo, setDropdownInfo] = useState(null);

  const handleMoreClick = (e, item) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownInfo({
      x: rect.left,
      y: rect.bottom,
      item,
    });
  };

  const closeDropdown = () => setDropdownInfo(null);

  // 다른 곳 클릭하면 드롭다운 닫히도록
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, closeDropdown);

  // 스크롤 상태에 따라 버튼 보여줄지 여부 계산
  const handleScrollVisibility = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeftBtn(el.scrollLeft > 0);
    setShowRightBtn(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScrollVisibility);
    handleScrollVisibility(); // 초기 상태 확인

    return () => el.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  return (
    <S.Section>
      <S.TitleRow>
        <S.Title>{title}</S.Title>
        <S.ViewAll onClick={() => navigate(`/archive/bookmark/${type === "글" ? "typed" : "played"}`)}>
          전체보기
        </S.ViewAll>
      </S.TitleRow>
      <S.ScrollWrapper>
        {showLeftBtn && <S.ScrollLeftBtn onClick={() => scroll("left")}>{"<"}</S.ScrollLeftBtn>}
        <S.CardRow ref={scrollRef}>
          {filteredItems.map((item, idx) => (
            <BookmarkCard key={idx} {...item} onMoreClick={(e) => handleMoreClick(e, item)} />
          ))}
        </S.CardRow>
        {showRightBtn && <S.ScrollRightBtn onClick={() => scroll("right")}>{">"}</S.ScrollRightBtn>}
      </S.ScrollWrapper>
      {dropdownInfo && (
        <S.DropdownMenu
          ref={dropdownRef}
          style={{
            position: "fixed",
            top: `${dropdownInfo.y}px`,
            left: `${dropdownInfo.x}px`,
          }}
          onClick={closeDropdown}
        >
          <li>이름변경</li>
          <li>폴더삭제</li>
          <li>공유하기</li>
        </S.DropdownMenu>
      )}
    </S.Section>
  );
};

export default BookmarkSection;
