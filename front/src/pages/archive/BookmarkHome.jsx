import React, { useRef, useState } from 'react';
import S from './bookmark.style';

const BookmarkHome = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  return (
    <div>
      <S.TypedTitle>
        <h2>Typed</h2>
      </S.TypedTitle>
      <S.TypedWrapper>
        <S.TypedBox>
          <img src="" alt="" id='ss'/>
          <S.LetterBox>
            <div>
              <h6>제목</h6>
              <p>작성 글 개수</p>
            </div>
             <S.dd onClick={() => setOpenDropdown((prev) => !prev)}>
              <S.Wrapper ref={dropdownRef}>
                {openDropdown && (
                  <S.Menu>
                    <S.Item onClick={() => alert("이름을 변경하겠습니다!")}>이름변경</S.Item>
                    <S.Item onClick={() => alert("폴더를 삭제하겠습니다!")}>폴더삭제</S.Item>
                    <S.Item onClick={() => alert("공유하겠습니다!")}>공유하기</S.Item>
                  </S.Menu>
                )}
              </S.Wrapper>
            </S.dd>
          </S.LetterBox>
        </S.TypedBox>
      </S.TypedWrapper>
{/* ======================================================================== */}
      <S.PlayedTitle>
        <h2>Played</h2>
      </S.PlayedTitle>
            <S.TypedWrapper>
        <S.TypedBox>
          <img src="" alt="" id='ss'/>
          <S.LetterBox>
            <div>
              <h6>제목</h6>
              <p>작성 글 개수</p>
            </div>
             <S.dd onClick={() => setOpenDropdown((prev) => !prev)}>
            </S.dd>
          </S.LetterBox>
        </S.TypedBox>
      </S.TypedWrapper>
      {/* <S.PlayedWrapper>
        <div></div>
      </S.PlayedWrapper> */}
    </div>
  );
};

export default BookmarkHome;
