import { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from './useScrollPosition';


export const useScrollDirection = (): boolean => {
  const prevPosition = useRef(0);
  const position = useScrollPosition();
  const [isDownScroll, setIsDownScroll] = useState(false);

  useEffect(() => {
    setIsDownScroll(prevPosition.current < position);
  }, [prevPosition.current < position]);

  setTimeout(() => {
    prevPosition.current = position;
  }, 0);

  return isDownScroll;
};
