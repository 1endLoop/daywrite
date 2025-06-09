import React, { useState } from 'react';
import S from './bookmark.style';

const BookmarkTypedList = () => {
  const [open, setOpen] = useState(false); 

  return (
    <S.wrap>
      <S.HeaderWrap>
        <S.HeaderBox>
          <img src="" alt="" />
          <h1>북마크</h1>
          <p></p>
        </S.HeaderBox>
        <S.Seaech>
          <input type="text" />
          <img src="" alt="" />
        </S.Seaech>
      </S.HeaderWrap>
      <S.BodyWrap>
        <S.BookBox>
          <img src="" alt="" />
          <S.BookInfo>
            <div id='title'>
              <h4>제목</h4>
              <p>편집</p>
            </div>
            <div id='img' onClick={() => setOpen(true)}>

            </div>
          </S.BookInfo>
        </S.BookBox>
        <S.TypeInfo>
          <div></div>
        </S.TypeInfo>
      </S.BodyWrap>

    {/* 팝업 테스트 */}
    <S.PopupContainer>
      {/* 팝업 */}
      {open && (
        <div className="popup">
          <div className="popup-box">
            <span className="close-btn" onClick={() => setOpen(false)}>
              &times;
            </span>
            <h2>팝업 제목</h2>
            <p>팝업 내용입니다.</p>
          </div>
        </div>
      )}
    </S.PopupContainer>





    </S.wrap>
  );
};

export default BookmarkTypedList;
