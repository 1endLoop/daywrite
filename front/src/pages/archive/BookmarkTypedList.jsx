import React, { useState } from 'react';
import S from './bookmark.style';


  const dummyData = [
    {
      id: 1,
      date: "2025. 05. 27",
      content:
        "진정한 사랑이란, 반드시 두 사람의 자유가 서로 상대방을 인정하는 기초 위에 세워져야 한다. 이때 두 사람은 서로를 자기 자신처럼 또는 타자처럼 느끼면서, 어느 한편에서도 자기 초월을 포기하지 않고 또 자기를 불구로 만드는 일 없이 함께 세계 속에서 가치와 목적을 발견할 것이다. 또한 자기를 줌으로써 자기 자신을 찾고 세계를 풍요롭게 할 것이다.",
      title: "제2의 성",
      author: "시몬느 드 보부아르",
      music: "Love on Top",
      artist: "John Canada",
    },
    {
      id: 2,
      date: "2025. 05. 26",
      content: "살아남은 자들이 부끄러워하던 시대는 가고, 곧 1등이든 2등이든 무조건 살아남는 것이 최선이라는 시대가 왔다. 지금은 너를 떨어뜨리지 않으면 내가 죽는다는, 오직 단 한명만이 살아남는다는 ‘오징어 게임’, 서바이벌 게임의 세계관이 스크린을 지배하는 세상이 되었다. 그러나 나는 은밀히 믿고 있다. 액정화면 밖 진짜 세상은 다르다고, 거기에는 조용히, 그러나 치열하게, 자기만의 방식으로 살아남아 어떻게든 삶의 의미를 찾기 위해 싸우는 이들이 있다는 것을.",
      title: "단 한 번의 삶",
      author: "김영하",
      music: "Rainy Days",
      artist: "Lee Moon",
    },
  ];

const BookmarkTypedList = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div>
      <S.HeaderWrap>
        <S.HeaderBox>
          <img src="" alt="" />
          <h2>북마크</h2>
          <p>1개의 글</p>
        </S.HeaderBox>
        <S.Seaech>
          <input type="text" />
          <img src="" alt="" />
          <p></p>
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
        <S.TypeInfo>
          {/* <S.TypedCard>
            북마크 정보
          </S.TypedCard> */}
          {dummyData.map((item) => (
          <S.TypedCard onClick={() => setOpen(true)} key={item.id}>
            <h3>{item.title}</h3>
            <p><strong>Author:</strong> {item.author}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Music:</strong> {item.music} - {item.artist}</p>
            <p>{item.content}</p>
        </S.TypedCard>
      ))}
        </S.TypeInfo>
      </S.BodyWrap>

    {/* 팝업 테스트 */}
    {/* onClick={() => setOpen(true)} 붙여넣기기*/}
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





    </div>
  );
};

export default BookmarkTypedList;
