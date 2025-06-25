import { useState } from "react";
import useScrollX from "../../modules/hooks/useScrollX";

const BookmarkSection = ({ title, dataType, imageUrl }) => {
  const { ref: scrollRef, scroll } = useScrollX();
  const [openIndex, setOpenIndex] = useState(null);

  return <></>;
};

export default BookmarkSection;
