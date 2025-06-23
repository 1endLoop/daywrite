import React, { useState } from 'react';
import styled from 'styled-components';

const dummyFaqs = [
  {
    question: '주문을 취소를 하고 싶어요',
    answer: '◆ 주문 상태에 따라 My > 나의 쇼핑정보 > 주문배송조회에서 즉시 취소 또는 취소 요청이 가능합니다.'
  },
  {
    question: '무슨 질문을 할까요 사람들이?',
    answer: ''
  },
  {
    question: '무슨 질문을 할까요 사람들이?',
    answer: ''
  },
  {
    question: '무슨 질문을 할까요 사람들이?',
    answer: ''
  },
  {
    question: '무슨 질문을 할까요 사람들이?',
    answer: ''
  },
];

const Faq = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(-1);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <Wrapper>
      <Title>FAQ</Title>

      <SearchBox>
        <Input
          type="text"
          placeholder="찾으시는 질문을 검색해보세요"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <img
            src="/assets/images/icons/search.png"
            alt="검색"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </SearchBox>

      <List>
        {dummyFaqs.map((faq, idx) => (
          <Item key={idx}>
            <Question onClick={() => handleToggle(idx)}>
              {faq.question}
            </Question>
            {expanded === idx && faq.answer && <Answer>{faq.answer}</Answer>}
          </Item>
        ))}
      </List>

      <Pagination>
        <span>&lt;</span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>&gt;</span>
      </Pagination>
    </Wrapper>
  );
};

export default Faq;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f2f2f2;
  padding: 8px 16px;
  width: 340px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  flex: 1;
  font-size: 14px;
  outline: none;
`;

const SearchIcon = styled.span`
  font-size: 16px;
  color: #888;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 90%;
`;

const Item = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 12px;
`;

const Question = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const Answer = styled.div`
  font-size: 14px;
  color: #444;
  margin-top: 20px;
  line-height: 1.5;
  padding-left: 30px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;

  span {
    font-size: 14px;
    color: #333;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .active {
    font-weight: bold;
    text-decoration: underline;
  }
`;
