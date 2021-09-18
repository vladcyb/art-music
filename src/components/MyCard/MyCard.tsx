import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '../../shared/hooks/useScrollPosition';
import './MyCard.scss';

interface IMyCard extends HTMLAttributes<HTMLDivElement> {
  bound?: number;
}

export const MyCard = ({
  className,
  bound = 0,
  children,
  ...props
}: PropsWithChildren<IMyCard>) => {
  const scrollPosition = useScrollPosition(100);
  const [isInViewport, setIsInViewport] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsInViewport((oldValue) => {
      return oldValue ?
        (ref.current?.getBoundingClientRect().top || 0) < window.innerHeight :
        (ref.current?.getBoundingClientRect().top || 0) + bound < window.innerHeight;
    });
  }, [ref.current?.getBoundingClientRect().top, scrollPosition]);

  return (
    <>
      <div ref={ref} />
      <div className={classNames(className, 'card', {
        card_hidden: !isInViewport,
        card_visible: isInViewport,
      })} {...props}>
        {children}
      </div>
    </>
  );
};
