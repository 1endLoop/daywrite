import styled from 'styled-components';
import { flexCenterColumn } from '../../global/common';

const S = {};

S.LoginContainer = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 80px; // 왼쪽-오른쪽 간격
  padding: 0 40px; // 작은 화면에서도 보이게
`;

  S.Form = styled.form`
    width: 100%;
    max-width: 423px;
    padding: 53px 68px 58px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  S.Label = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

// 왼쪽 이미지랑 로고 영역

// 로고
  S.ImageWrapper = styled.div`
    width: 368px;
    height: 68px;
  `;

// 로고아래 텍스트
  S.LoginSubText = styled.span`
    color: #282828;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 30px;
    word-wrap: break-word;
  `;

// 로고 + 텍스트 섹션
  S.LoginLeftBox = styled.div`
    width: 368px;
    ${flexCenterColumn}
    gap: 12px;
  `;


// 오른쪽 흰색 로그인 영역
  S.LoginRightBox = styled.div`
    padding: 53px 68px 58px 68px;
    background-color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 44px;
    display: inline-flex;
  `;

// 1번섹션
    S.Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: #282828;
    margin-bottom: 8px;
  `

  S.Subtitle = styled.p`
    font-size: 16px;
    color: #282828;
    margin-bottom: 44px;
  `

// 텍스트필드 타이틀
  S.LabelText = styled.span`
    color: #282828;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    word-wrap: break-word;
  `;

// 텍스트필드 인풋박스
  S.Input = styled.input`
    width: 423px;
    padding: 17px 16px;
    background-color: white;
    outline: 0.50px #282828 solid;
    outline-offset: -0.50px;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;

    &::placeholder {
      color: #BFBFBF;
      font-size: 16px;
      font-family: Pretendard;
      font-weight: 400;
      line-height: 24px;
      word-wrap: break-word;
    }
  `

// 텍스트필드 오류시 하단 메세지
  S.ConfirmMessage = styled.p`
    color: #EB5757;
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 300;
    padding-top: 3px;
  `

// 아이콘 사이즈
S.Icon = styled.div`
  width: 24px;
  height: 24px;
`;


export default S;

