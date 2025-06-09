import styled from "styled-components";

const S = {}

// Bookmark Hoom
S.TypedTitle = styled.div`
    width: 100%;
    margin-left: 0;
`
S.TypedWrapper = styled.div`
    border: solid 1px red;
    display: flex;
    width: 100%;
    height: 220px;
    display: flex;
    margin-top: 10px;
`
// Typed 이미지
S.TypedBox = styled.div`
    border: solid 1px black;
    width: 180px;
    height: 100%;

    img {
        border: solid 1px red;
        margin-top: 20px;
        width: 100%;
        height: 140px;
    }
`
// Typed 제목, ...
S.LetterBox = styled.div`
    width: 100%;
    height: 48px;
    border: solid 1px yellow;
    justify-content: space-between;
`

// Played Wrap
S.PlayedTitle = styled.div`
    width: 100%;
    margin-top: 50px;
`
S.PlayedWrapper = styled.div`
    border: solid 1px red;
    width: 100%;
    height: 220px;
    display: flex;
    margin-top: 10px;
`

// Played List
S.HeaderWrap = styled.div`
    border: solid 1px red;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
`
S.HeaderBox = styled.div`
    /* border: solid 1px black; */
    width: 250px;
    height: 100%;
    display: flex;
    gap: 15px;
    justify-content: center; //수직 가운데 정렬
    align-items: center; // 수평 가운데 정렬

    // 뒤로가기 화살표 
    img{
        border: solid 1px red;
        width: 30px;
        height: 30px;
        /* position: absolute; top: 50px; left: 10px; */
    }
`
S.Seaech = styled.div`
    width: 350px;
    height: 40px;
    margin-top: 25px;
    display: flex;

    input {
        width: 350px;
        height: 40px;
        border: solid 1px black;
        border-radius: 5px;
        margin-right: 50px;
    }
    // 검색 돋보기
    img {
        border: solid 1px black;
        width: 25px;
        height: 25px;
        position: absolute; right: 150px; top: 70px;
    }
`

S.BodyWrap = styled.div`
    /* border: solid 1px red; */
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
`
S.BookBox = styled.div`
    border: solid 1px black;
    width: 200px;
    height: 250px;
    margin-top: 30px;
    margin-left: 30px;
    //책 표지
    img {
        border: solid 1px red;
        width: 100%;
        height: 170px;
    }
`
S.BookInfo = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    #title{
        /* border: solid 1px red; */
        width: 100px;
        height: 100%;
        p{
            font-size: 15px;
            color: #787878;
        }
    }
    #img{
        border: solid 1px red;
        width: 20px;
        height: 20px;
    }
`
//북마크 리스트
S.TypeInfo = styled.div`
    border: solid 1px black;
    width: 600px;
    height: 570px;
    margin-top: 30px;
    margin-right: 50px;
`

S.PlayInfo = styled.div`
    border: solid 1px red;
    width: 600px;
    height: 50px;
    margin-right: 30px;
`
S.PlayBox = styled.div`
    border-top: solid 1px black;
    width: 600px;
    height: 570px;
    margin-top: 50px;
    margin-right: 30px;
`

//=====================================

/* 전체 컨테이너 */
S.PopupContainer = styled.div`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

/* 팝업 배경 */
.popup {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  /* overflow: auto; */
  background: rgba(0, 0, 0, 0.5); //백그라운드 흐리게
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}    
/* 팝업 본체 */
.popup-box {
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  min-width: 300px;
  position: relative;
  text-align: center;
  width: 500px;
  height: 500px;
  overflow: auto;
}

/* 닫기 버튼 */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #888;
}

.close-btn:hover {
  color: black;
}
`
// wrap 1400
S.wrap = styled.div`
    border: solid 1px red;
    width: 1250px;
    height: 730px;
    margin: auto;
`




export default S