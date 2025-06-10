import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import S from './style';
import BasicButton from '../../components/button/BasicButton';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted, errors }
  } = useForm({ mode: 'onChange' });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const onSubmit = async (data) => {
    console.log(data); // 로그인 데이터 처리
  };

  return (
    <S.Container>
      <S.LeftBox>
        <S.LogoText>
          day<span>write.</span>
        </S.LogoText>
        <S.SubText>글과 음악이 함께하는 공간.</S.SubText>
      </S.LeftBox>

      <S.RightBox>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Title>로그인</S.Title>
          <S.Subtitle>Welcome to daywrite !</S.Subtitle>

          <S.Label>
            이메일
            <S.Input
              type="text"
              placeholder="이메일을 입력해주세요."
              {...register('email', {
                required: true,
                pattern: { value: emailRegex }
              })}
            />
            {errors.email?.type === 'required' && (
              <S.ErrorMessage>이메일을 입력해주세요.</S.ErrorMessage>
            )}
            {errors.email?.type === 'pattern' && (
              <S.ErrorMessage>이메일 형식을 지켜주세요. 예: test@gmail.com</S.ErrorMessage>
            )}
          </S.Label>

          <S.Label>
            비밀번호
            <S.PasswordWrapper>
              <S.Input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력해주세요."
                {...register('password', {
                  required: true,
                  pattern: { value: passwordRegex }
                })}
              />
              <S.ToggleButton type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '🙈' : '👁️'}
              </S.ToggleButton>
            </S.PasswordWrapper>
            {errors.password?.type === 'required' && (
              <S.ErrorMessage>비밀번호를 입력해주세요.</S.ErrorMessage>
            )}
            {errors.password?.type === 'pattern' && (
              <S.ErrorMessage>
                8자 이상, 소문자/숫자/특수문자(!@#) 포함이어야 합니다.
              </S.ErrorMessage>
            )}
          </S.Label>

          <S.OptionRow>
            <label>
              <input type="checkbox" />
              아이디 저장
            </label>
            <a href="#">비밀번호 찾기</a>
          </S.OptionRow>

          <BasicButton size="full" shape="small" variant="black" disabled={isSubmitting}>
            로그인
          </BasicButton>

          <S.BottomText>
            아직 회원이 아니신가요? <a href="#">회원가입</a>
          </S.BottomText>
        </S.Form>
      </S.RightBox>
    </S.Container>
  );
};

export default LogIn;
