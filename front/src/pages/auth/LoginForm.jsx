import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import S from './login.form.style';
import BasicButton from '../../components/button/BasicButton'


const LoginForm = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const {
    register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors }
  } = useForm({ mode: "onChange" })
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
  const onSubmit = async (data) => {
    console.log(data);
  };


  return (
    <S.LoginContainer>

      <S.LoginLeftBox>
        <S.ImageWrapper>
          <img src={process.env.PUBLIC_URL + '/asset/images/logo.png'} alt="로고" />
        </S.ImageWrapper>
        <S.LoginSubText>글과 음악이 함께하는 공간.</S.LoginSubText>
      </S.LoginLeftBox>


      <S.LoginRightBox>
        <S.Form onSubmit={handleSubmit(onSubmit)}>

          <S.Title>로그인</S.Title>
          <S.Subtitle>Welcome to daywrite!</S.Subtitle>

        <S.Label>
          <S.LabelText>이메일</S.LabelText>
          <S.Input 
            type="text" placeholder="이메일을 입력해주세요." 
            {...register("email", {
              required : true,
              pattern : { value : emailRegex }
            })}
          />
        {errors && errors?.email?.type === "required" && (
          <S.ConfirmMessage>이메일을 입력하세요</S.ConfirmMessage>
        )}
        {errors && errors?.email?.type === "pattern" && (
          <S.ConfirmMessage>아이디가 일치하지 않습니다.</S.ConfirmMessage>
        )}
        </S.Label>

        <S.Label>
          <S.Title>비밀번호</S.Title>
          <S.Input 
            type="password" placeholder="비밀번호를 입력하세요." 
            {...register("password", {
              required : true,
              pattern : {
                value : passwordRegex
              }
            })}
          />
        {errors && errors?.password?.type === "required" && (
          <S.ConfirmMessage>비밀번호를 입력하세요</S.ConfirmMessage>
        )}
        {errors && errors?.password?.type === "pattern" && (
          <S.ConfirmMessage>소문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다.</S.ConfirmMessage>
        )}
        </S.Label>

        <BasicButton> 로그인 </BasicButton>

        </S.Form>
      </S.LoginRightBox>


    </S.LoginContainer>
  );
};

export default LoginForm;