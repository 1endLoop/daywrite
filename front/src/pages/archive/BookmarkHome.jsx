import React from 'react';
import S from './bookmark.style';

const BookmarkHome = () => {
  return (
    <S.wrap>
      <S.TypedTitle>
        <h1>Typed</h1>
      </S.TypedTitle>
      <S.TypedWrapper>
        <S.TypedBox>
          <img src="" alt="" />
          <S.LetterBox>
            <div className='letter'></div>
            <div></div>
          </S.LetterBox>
        </S.TypedBox>
      </S.TypedWrapper>

      <S.PlayedTitle>
        <h1>Played</h1>
      </S.PlayedTitle>
      <S.PlayedWrapper>
        <div></div>
      </S.PlayedWrapper>
    </S.wrap>
  );
};

export default BookmarkHome;
