import React from 'react';
import S from './bookmark.style';

const BookmarkPlyedList = () => {
  return (
    <div>
      <S.HeaderWrap>
        <S.HeaderBox>
          <img src="" alt="" />
          <h1>음악</h1>
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
            <div id='img'>

            </div>
          </S.BookInfo>
        </S.BookBox>
        <S.PlayBox>
          {/* <S.PlayInfo>
          </S.PlayInfo> */}
          <div></div>
        </S.PlayBox>
      </S.BodyWrap>

    </div>
  );
};

export default BookmarkPlyedList;