import React from 'react';

const SignUp = () => {

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

          <S.Title>회원가입</S.Title>
          <S.LoginBottomText>
            이미 회원이신가요? <a href="../pages/auth/Login">로그인</a>
          </S.LoginBottomText>

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
            <S.LabelText>비밀번호</S.LabelText>
            <S.PasswordWrapper>
              <S.Input 
                type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요." 
                {...register("password", {
                  required : true,
                  pattern : {
                    value : passwordRegex
                  }
                })}
              />

              <S.ToggleButton type="button" onClick={() => setShowPassword(!showPassword)}>
                <img src=
                  {
                    process.env.PUBLIC_URL + (showPassword ? '/asset/icons/eye-off.png' : '/asset/icons/eye.png')
                  } alt="비밀번호 보기 토글"
                />
              </S.ToggleButton>
            </S.PasswordWrapper>

            {errors && errors?.password?.type === "required" && (
              <S.ConfirmMessage>비밀번호를 입력하세요</S.ConfirmMessage>
            )}
            {errors && errors?.password?.type === "pattern" && (
              <S.ConfirmMessage>소문자, 숫자, 특수문자(!@#) 포함 8자 이상이어야 합니다.</S.ConfirmMessage>
            )}
          </S.Label>


          <S.Label>
            <S.LabelText>비밀번호 확인</S.LabelText>
            <S.PasswordWrapper>
              <S.Input 
                type="password" placeholder="비밀번호를 입력하세요." 
                {...register("passwordConfirm", {
                  required : true,
                  validate : {
                    matchPassword : (passwordConfirm) => {
                      const { password } = getValues();
                      console.log(password, passwordConfirm, password === passwordConfirm)
                      return password === passwordConfirm
                    }
                  }
                })}
              />
              <S.ToggleButton type="button" onClick={() => setShowPassword(!showPassword)}>
                <img src=
                  {
                    process.env.PUBLIC_URL + (showPassword ? '/asset/icons/eye-off.png' : '/asset/icons/eye.png')
                  } alt="비밀번호 보기 토글"
                />
              </S.ToggleButton>
            </S.PasswordWrapper>

            
          { errors && errors?.passwordConfirm && (
            <S.ConfirmMessage>비밀번호가 일치하지 않습니다.</S.ConfirmMessage>
          )}
          </S.Label>



          <BasicButton size={"full"} shape={"small"} color={"white"} variant={"black"} disabled={isSubmitting} >
            회원가입
          </BasicButton>

        </S.Form>
      </S.LoginRightBox>


    </S.LoginContainer>
  );
};

export default SignUp;