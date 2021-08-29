import { useEffect, useState } from 'react';

export enum CheckScrollPositionMode {
  Less,
  More,
  Bounds,
}

export const useCheckScrollPosition = (
  mode: CheckScrollPositionMode,
  value: number,
  value2?: number,
): boolean | null => {
  const [passed, setPassed] = useState<boolean | null>(null);

  const update = () => {
    const position = -document.body.getBoundingClientRect().top;
    switch (mode) {
    case CheckScrollPositionMode.More:
      setPassed(position > value);
      return;
    case CheckScrollPositionMode.Less:
      setPassed(position < value);
      return;
    default:
      if (!value2) {
        return;
      }
      setPassed(position > value && position < value2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return passed;
};
