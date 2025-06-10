import React from 'react';
import { useForm } from 'react-hook-form';
import S from './style';
import BasicButton from '../../components/button/BasicButton';


const LogIn = () => {  
  
  const {
    register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors }
  } = useForm({ mode: "onChange" })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <div>
      <S.Form onSubmit={handleSubmit(async (datas) => {
        console.log(datas)
      })}>

        <S.Label>
          <S.Title>이메일</S.Title>
          <S.Input 
            type="text" placeholder="아이디를 입력하세요." 
            {...register("email", {
              required : true,
              pattern : {
                value : emailRegex
              }
            })}
          />
        {errors && errors?.email?.type === "required" && (
          <S.ConfirmMessage>이메일을 입력하세요</S.ConfirmMessage>
        )}
        {errors && errors?.email?.type === "pattern" && (
          <S.ConfirmMessage>이메일 양식을 지켜주세요. ex)test@gmail.com </S.ConfirmMessage>
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

        <BasicButton size={"full"} shape={"small"} color={"white"} variant={"black"} disabled={isSubmitting} >
          회원가입
        </BasicButton>
      </S.Form>
    </div>
  );
};

export default LogIn;