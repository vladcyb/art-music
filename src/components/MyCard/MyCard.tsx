import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '../../shared/hooks/useScrollPosition';
import './MyCard.scss';

interface IMyCard extends HTMLAttributes<HTMLDivElement> {}

export const MyCard = ({ className, children, ...props }: PropsWithChildren<IMyCard>) => {
  const scrollPosition = useScrollPosition(100);
  const [isInViewport, setIsInViewport] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsInViewport((ref.current?.getBoundingClientRect().top || 0) < window.innerHeight);
  }, [ref.current?.getBoundingClientRect().top, scrollPosition]);

  return (
    <div className={classNames(className, 'card', {
      card_hidden: !isInViewport,
      card_visible: isInViewport,
    })} {...props} ref={ref}>
      {children}
    </div>
  );
};
