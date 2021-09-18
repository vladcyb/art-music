import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren, useRef } from 'react';
import { useScrollPosition } from '../../shared/hooks/useScrollPosition';
import './MyCard.scss';

interface IMyCard extends HTMLAttributes<HTMLDivElement> {
  bound?: number;
}

const renderCount = {
  value: 0,
};

export const MyCard = ({
  className,
  bound = 0,
  children,
  ...props
}: PropsWithChildren<IMyCard>) => {
  console.log('render count:', renderCount.value++);

  useScrollPosition(100);
  const state = useRef({
    isInViewport: false,
  });
  const ref = useRef<HTMLDivElement>(null);

  state.current.isInViewport = state.current.isInViewport ?
    (ref.current?.getBoundingClientRect().top || 0) < window.innerHeight :
    (ref.current?.getBoundingClientRect().top || 0) + bound < window.innerHeight;

  return (
    <>
      <div ref={ref} />
      <div className={classNames(className, 'card', {
        card_hidden: !state.current.isInViewport,
        card_visible: state.current.isInViewport,
      })} {...props}>
        {children}
      </div>
    </>
  );
};
