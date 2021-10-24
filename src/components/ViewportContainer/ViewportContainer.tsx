import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

interface IViewportContainerProps {
  className?: string;
}

export const ViewportContainer = ({
  children,
  className,
}: PropsWithChildren<IViewportContainerProps>) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<any>(null);

  const handleScroll = () => {
    if (!ref.current) {
      return;
    }
    setIsVisible(ref.current.getBoundingClientRect()?.bottom - 64 > 0 &&
      ref.current.getBoundingClientRect()?.top < window.innerHeight);
  };

  const onScroll = () => {
    if (timeout.current) {
      return;
    }
    timeout.current = window.setTimeout(() => {
      handleScroll();
      timeout.current = null;
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={classNames(
      'viewport-container',
      isVisible ? 'viewport-container_visible' : 'viewport-container_invisible',
      className,
    )}
    ref={ref}
    >
      {children}
    </div>
  );
};
