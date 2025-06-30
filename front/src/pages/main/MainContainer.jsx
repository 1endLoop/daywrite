import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "./main.form.style";
import MainPopup from './MainPopup';
import MainPlaylistPopup from './MainPlaylistPopup';

const MainContainer = () => {
// 좋아요/북마크 상태
const [showLike, setShowLike] = useState(false);
const [showBookmark, setShowBookmark] = useState(false);

// 음악 재생 상태
const [isPlaying, setIsPlaying] = useState(false);
const handlePlayToggle = () => {
  setIsPlaying((prev) => !prev);
};

// 현재 인덱스와 페이드 애니메이션
const [currentIndex, setCurrentIndex] = useState(0);
const [fade, setFade] = useState(true);

// 더미 데이터 배열 (💡 currentData보다 위에 있어야 함!)
const dummyData = [
  {
    typing: `평범한? 그걸로 되겠어? 내가 있는 세계는 평범한 얼굴로 싸울 수 있는 곳이 아니에요. 눈도 입술도 남들보다 예뻐야만 한다는 자각이 있었는데, 왜 코에 대해서는 평범하다는 사실에 만족하고 있었니? 이상하다는 생각 안 들고?
의식하고 나서 코를 보니 내 코는 한번 눌린 적이 있다는 걸 알 수 있겠더라고요. 사라 코가 새로 산 깃털 패딩이라면 내 코는 한 철 잘 입고 세탁소에 보냈다가 찾아온 느낌
비유가 재미있다고요? 좀 무시하는 거 같은데. 선배니까 용서하겠지만.`,
    title: "조각들",
    author: "미나토 가나에",
    source: "mimyang",
  },
  {
    typing: `연탄재
함부로 차지마라

너는 누구에게 
한번이라도
뜨거운

사람이었느냐`,
    title: "너에게 묻는다.",
    author: "안도현",
    source: "Layal_Post",
  },
  {
    typing: `어떤 이의 밤을 밝힐 기름이 다른 이들의 피 속에서 흘러나와서는 안 된다. 어둠을 쫒고 싶다면 그 스스로 불꽃이 되어야 한다.`,
    title: "피를 마시는 새",
    author: "이영도",
    source: "sca",
  },
];

// 현재 입력값
const [inputValue, setInputValue] = useState("");

// 현재 데이터 (dummyData와 currentIndex가 필요)
const currentData = dummyData[currentIndex];


// 타이핑 게이지 계산 (inputValue와 currentData가 필요)
const totalWidth = 1126;
const tickWidth = 1.5;
const pointWidth = 7;
const gap = 20;

const cycleWidth = tickWidth * 3 + pointWidth + gap * 3;
const maxCycles = Math.floor(totalWidth / cycleWidth); // 한 줄에 들어갈 수 있는 사이클 개수
const visibleCount = maxCycles * 4.5;

const current = inputValue.length; // 현재 타이핑한 글자 수
const total = dummyData[currentIndex].typing.length; // 전체 텍스트 길이
const percent = Math.floor((current / total) * 100); // 퍼센트 계산

// 색칠할 개수 계산 (퍼센트 기준)
const filledCount = Math.floor((percent / 100) * visibleCount);

// 입력 핸들러
const handleChange = (e) => {
  const newValue = e.target.value;
  if (newValue.length <= currentData.typing.length) {
    setInputValue(newValue);
  }
};


// 새 추천글 불러오기
const handleRefresh = () => {
  setFade(false);
  setTimeout(() => {
    // ➤ 추천글 랜덤 인덱스
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * dummyData.length);
    } while (nextIndex === currentIndex);
    setCurrentIndex(nextIndex);

    // ➤ 앨범 랜덤 선택
    const nextSong = dummyPlaylist[Math.floor(Math.random() * dummyPlaylist.length)];
    setCurrentSong(nextSong);

    setInputValue("");
    setFade(true);
  }, 300);
};


const navigate = useNavigate();
const [showPopup, setShowPopup] = useState(false);
const [popupType, setPopupType] = useState("");
const isLoggedIn = false;

const handleSettingClick = () => {
  setPopupType(isLoggedIn ? "member" : "guest");
  setShowPopup(true);
};

// 플레이리스트
const [showPlaylist, setShowPlaylist] = useState(false);
const dummyPlaylist = [
  { img: "/assets/images/album_cover/love-on-top.jpg", title: "Love on Top", artist: "Beyonce", liked: true },
  { img: "/assets/images/album_cover/love-sick-girls.jpg", title: "Love Sick Girls", artist: "BlackPink(블랙핑크)", liked: false },
  { img: "/assets/images/album_cover/smiley.ori.jpg", title: "Smiley", artist: "YENA(최예나)", liked: false },
  { img: "/assets/images/album_cover/summernignt.lyn.jpg", title: "한여름 밤", artist: "Lyn(린)", liked: true },
  { img: "/assets/images/album_cover/the-winning.jpg", title: "the winning", artist: "IU(아이유)", liked: true }
];

const [currentSong, setCurrentSong] = useState(dummyPlaylist[0]);


  return (
  <div>

    {showPopup && (
      <MainPopup
        type={popupType}
        onClose={() => setShowPopup(false)}
        onConfirm={() => {
          setShowPopup(false);
          popupType === 'guest' ? navigate('/login') : navigate('/mypage');
        }}
      />
    )}

    {showPlaylist && (
      <MainPlaylistPopup onClose={() => setShowPlaylist(false)} data={dummyPlaylist} />
    )}

    <M.Container>
      <M.Content01>
        <M.TitleWrap>
          <div data-layer="오늘의" style={{color: '#282828', fontSize: 26, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word'}}>오늘의</div>
          <div data-layer="추천글" style={{color: '#282828', fontSize: 26, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>추천글</div>
        </M.TitleWrap>
        <M.TitleIconWrap>
          <M.IcBtn onClick={handleSettingClick}>
            <img src="/assets/images/icons/settings.png" alt="필사 테마 설정" />
          </M.IcBtn>
          
          <M.IcBtn  onClick={() => setInputValue("")}>
            <img src="/assets/images/icons/eraser.png" alt="필사글 전체 지우기"/>
          </M.IcBtn>
        </M.TitleIconWrap>
      </M.Content01>


      <M.Content02>
      <M.TypingSpeedWrap>
        <M.Line style={{ backgroundColor: "#282828" }} />

        <M.ProgressBarWrapper>
          <M.ProgressBarContainer>
            <M.ProgressBar>
              {Array.from({ length: visibleCount }, (_, i) =>
                (i + 1) % 4 === 0 ? (
                  <M.ProgressPoint key={i} $active={i < filledCount} />
                ) : (
                  <M.ProgressTick key={i} $active={i < filledCount} />
                )
              )}
            </M.ProgressBar>
          </M.ProgressBarContainer>
            <M.ProgressPercentWrap>
              <M.Bar />
              <M.Triangle />
              <M.PercentText>{percent}%</M.PercentText>
            </M.ProgressPercentWrap>
        </M.ProgressBarWrapper>

        <M.Line style={{ backgroundColor: "#282828" }} />
      </M.TypingSpeedWrap>


        <M.FadeWrapper fade={fade}>
        <M.ContentBox>
            <M.TypingOverlay aria-hidden>
              {currentData.typing.split("").map((char, index) => {
                const typedChar = inputValue[index];

                let color = "#BFBFBF";
                if (typedChar !== undefined) {
                  if (index === inputValue.length - 1 && inputValue.length === index + 1) {
                    color = "#282828";
                  } else {
                    color = typedChar === char ? "#282828" : "red";
                  }
                }

                return (
                  <span key={index} style={{ whiteSpace: 'pre-wrap', color }}>{typedChar ?? char}</span>
                );
              })}
            </M.TypingOverlay>

            <M.HiddenInput
              value={inputValue}
              spellCheck={false}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue.length <= currentData.typing.length) {
                  setInputValue(newValue);
                }
              }}
            />
        </M.ContentBox>
        </M.FadeWrapper>

        <M.UnderContent>
          <M.Line />
            <M.StyledUnder01>
              <M.StyledMusic>
                <M.IconButton type="button" onClick={() => setShowLike(!showLike)}>
                  <img src={process.env.PUBLIC_URL
                    + (showLike ? '/assets/images/icons/like-on-color.png' : '/assets/images/icons/like-off-color.png')} 
                    alt="like"/>
                </M.IconButton>
                <M.Album>
                  <M.AlbumImg src={currentSong.img}/>
                  <M.AlbumInfo>
                    <h5 style={{ color: "#282828" }}>{currentSong.title}</h5>
                    <h6 style={{ color: "#787878" }}>{currentSong.artist}</h6>
                  </M.AlbumInfo>
                </M.Album>
              </M.StyledMusic>
              <M.PlayListIconWrap>
                <M.PlayIconWrap>
                  <M.PlayIcon onClick={""}>
                    <img src="/assets/images/icons/skip_previous.png" alt="재생 이전"/>
                  </M.PlayIcon>
                  <M.PlayIcon onClick={handlePlayToggle}>
                    <img
                      src={
                        isPlaying
                          ? "/assets/images/icons/music-pause.png"
                          : "/assets/images/icons/music-play.png"
                      }
                      alt={isPlaying ? "일시정지" : "재생"}
                    />
                  </M.PlayIcon>
                  <M.PlayIcon onClick={""}>
                    <img src="/assets/images/icons/skip_next.png" alt="재생 다음"/>
                  </M.PlayIcon>
                </M.PlayIconWrap>
                  <M.PlayListWrap onClick={() => setShowPlaylist(!showPlaylist)}>
                    <h4>PLAY LIST</h4>
                    <M.IcBtn>
                      <img src="/assets/images/icons/list.png" alt="플레이리스트" />
                    </M.IcBtn>
                  </M.PlayListWrap>
              </M.PlayListIconWrap>
            </M.StyledUnder01>

          <M.Line style={{ backgroundColor: "#282828" }} />

            <M.StyledUnder02>
              <M.ReplayBookIconWrap>
                <M.ReplayBtn onClick={handleRefresh}>
                  <img src="/assets/images/icons/replay.png" alt="필사 새로고침"/>
                </M.ReplayBtn>
                <M.BookmarkInfoWrap>
                  <M.IconButton type="button" onClick={() => setShowBookmark(!showBookmark)}>
                    <img src={process.env.PUBLIC_URL
                      + (showBookmark ? '/assets/images/icons/bookmark-on-color.png' : '/assets/images/icons/bookmark-off-color.png')} 
                      alt="bookmark"/>
                  </M.IconButton>
                <M.BookInfoWrapper>
                  <h4>{currentData.title}</h4>
                  <M.BookInfoWrap>
                    <h5>{currentData.author}</h5>
                    <small style={{color: "#787878"}}>{currentData.source}</small>
                  </M.BookInfoWrap>
                </M.BookInfoWrapper>
                </M.BookmarkInfoWrap>
              </M.ReplayBookIconWrap>
              <M.SaveBtn>저장</M.SaveBtn>
            </M.StyledUnder02>
        </M.UnderContent>
      </M.Content02>
    </M.Container>
  </div>
  );
};

export default MainContainer;