import React from 'react';
import styled from 'styled-components';
import S from '../my_page/style';
import C from './calendar.style'
import styles from './CalendarHome.module.css';
import { Link } from 'react-router-dom';
import CalendarList from './CalendarList';

const CalendarHome = () => {
  return (
    <Container>
      <Title>캘린더</Title> 
      
      <div className={styles.content}>   
        <div style={{marginRight:'30px'}}>
          <S.ProfileHeader>
            <S.Avatar src="/assets/images/profiles/profile.JPG" />
            <div>
              <S.Nickname style={{marginBottom:'10px'}}>예닮</S.Nickname>
              <S.Email>yedam@email.com</S.Email>
            </div>
          </S.ProfileHeader>
          <C.InfoCard>
               <div className={styles.level}>
                <img src="/assets/images/icons/star.png" alt="star" width="24" />
                <span>레벨 10</span>
              </div>
              <div style={{marginLeft:'15px'}}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom:'5px' }}>
                  <img src="/assets/images/icons/keyboard.png" alt="keyboard" width="24" />
                  <span>필사 125개</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' ,paddingTop:'5px'}}>
                  <img src="/assets/images/icons/fire.png" alt="fire" width="24" />
                  <span>연속 15일</span>
                </div>
              </div>
          </C.InfoCard>
        </div>
        <CalendarList/>
      </div>


    </Container>
  );
};


const Container = styled.div`
  width: 100%;
  padding-top: 24px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #131313;
  margin-bottom: 24px;
`;

export default CalendarHome;

