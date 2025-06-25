import styled from "styled-components";
import BookmarkSection from "./BookmarkSection";
import useScrollX from "../../modules/hooks/useScrollX";
import { ScrollButton } from "../../components/button/ScrollButton";

const BookmarkMain = () => {
  return (
    <Container>
      <BookmarkSection title="Typed" type="글" />
      <BookmarkSection title="Played" type="곡" />
    </Container>
  );
};

export default BookmarkMain;

const Container = styled.div`
  position: relative;
  padding: 40px 0 0 0;
`;
