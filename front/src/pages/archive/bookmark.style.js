import styled from "styled-components";

const S = {}

// Bookmark Hoom
S.TypedTitle = styled.div`
    width: 100%;
    margin-top: 30px;
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
        /* border: solid 1px red; */
        width: 100%;
        height: 160px;
    }
`
// Typed 제목, ...
S.LetterBox = styled.div`
    /* border: solid 1px yellow; */
    width: 100%;
    height: 50px;
    justify-content: space-between;
    position: relative;

    h6 {
        margin-top: 5px;
    }
    p {
        margin-top: 8px;
        font-size: 15px;
        color: #787878;
    }
`
// 드롭다운
S.dd = styled.div`
    border: solid 1px red;
    width: 18px;
    height: 18px;
    position: absolute; right: 0px; top: 0px;
`
S.Wrapper = styled.div`
  position: relative;
`

S.Menu = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`
S.Item = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f2f2f2;
  }
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

// 북마크 리스트
S.HeaderWrap = styled.div`
    /* border: solid 1px red; */
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
    margin-left: 55px;
    justify-content: center; //수직 가운데 정렬
    align-items: center; // 수평 가운데 정렬

    // 뒤로가기 화살표 
    img{
        /* border: solid 1px red; */
        width: 25px;
        height: 25px;
        /* position: absolute; top: 50px; left: 10px; */
    }
    p {
        font-size : 15px;
        color: #787878;
    }
`
S.Seaech = styled.div`
    width: 250px;
    height: 30px;
    margin-top: 25px;
    margin-right: 120px;
    display: flex;
    position: relative;

    input {
        margin-top: 10px;
        width: 350px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #BFBFBF;
        border-radius: 5px;
       
    }
    // 검색 돋보기
    img {
        border: solid 1px #BFBFBF;
        width: 25px;
        height: 25px;
        position: absolute; right: 8px; top: 14px;
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
    margin-top: 0;
    margin-left: 100px;
    //책 표지
    img {
        /* border: solid 1px red; */
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
            margin-top: 10px;
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
    width: 650px;
    height: 600px;
    margin-top: 0;
    margin-right: 120px;
`
S.TypedCard = styled.div`
    border: solid 1px red;
    width: 100%;
    height: 180px;
`

// 플레이 모음 상세
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
// 팝업
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