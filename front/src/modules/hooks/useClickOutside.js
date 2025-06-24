import { useEffect } from "react";

// 드롭다운을 위한 커스텀 훅입니다.

const useClickOutside = (ref, hanler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      hanler(e);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, hanler]);
};

export default useClickOutside;
