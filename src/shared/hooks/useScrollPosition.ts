import { useEffect, useRef, useState } from 'react';

export const useScrollPosition = (): number => {
  const timeout = useRef<any>(null);
  const [position, setPosition] = useState(window.scrollY);

  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  const handlePageScroll = () => {
    if (timeout.current !== null) {
      return;
    }
    timeout.current = setTimeout(() => {
      handleScroll();
      timeout.current = null;
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handlePageScroll);

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, []);

  return position;
};
