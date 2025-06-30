import React from 'react';
import { filledButtonCSS } from '../../components/button/style';
import C from '../auth/category.container.form.style';
import BasicButton from '../../components/button/BasicButton'
import { useForm } from 'react-hook-form';


const CategoryContainerForm = () => {
  const {
    register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors }
  } = useForm({ mode: "onSubmit" })

  const onSubmit = async (data) => { console.log(data); };

  return (
    <C.CategoryContainer>

      <C.CategoryLeftBox>
        <C.Logo src="/assets/images/logo.png" alt="logo" />
        <C.CategorySubText>글과 음악이 함께하는 공간.</C.CategorySubText>
      </C.CategoryLeftBox>


      <C.CategoryRightBox>
        <C.CategoryForm onSubmit={handleSubmit(onSubmit)}>
        <C.CategoryWrapper>
          <C.CategoryWrap>
            <C.CategoryTitle>마음에 드는 키워드를 골라보세요</C.CategoryTitle>
            <C.OnOffBtnWrap>
              <div>키워드 on/off-1번째줄</div>
              <div>키워드 on/off-2번째줄</div>
            </C.OnOffBtnWrap>
          </C.CategoryWrap>
          <C.CategoryWrap>
            <C.CategoryTitle>글의 장르를 골라보세요.</C.CategoryTitle>
            <C.OnOffBtnWrap>
              <div>장르 on/off-1번째줄</div>
              <div>장르 on/off-2번째줄</div>
            </C.OnOffBtnWrap>
          </C.CategoryWrap>
        </C.CategoryWrapper>

        <BasicButton customStyle={filledButtonCSS}>나에게 맞는 글 불러오기</BasicButton>
      </C.CategoryForm>
      </C.CategoryRightBox>


    </C.CategoryContainer>
  );
};

export default CategoryContainerForm;