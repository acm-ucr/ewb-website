import { useRef, useState, useEffect } from "react";

const useView = (offset = 0) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const onScroll = () => {
    if (!ref.current) {
      setInView(false);
      return;
    }
    setInView(
      ref.current.getBoundingClientRect().top + offset <= window.innerHeight &&
        ref.current.getBoundingClientRect().bottom - offset >= 0
    );
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  }, []);
  return [inView, ref];
};

export default useView;
