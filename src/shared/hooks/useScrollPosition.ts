import { useEffect, useState } from 'react';

export const useScrollPosition = (): number => {
  const [position, setPosition] = useState(-document.body.getBoundingClientRect().top);

  const update = () => {
    setPosition(-document.body.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return position;
};
